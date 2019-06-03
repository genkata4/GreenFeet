package es.uma.informatica.swe.greenfeet.route;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import es.uma.informatica.swe.greenfeet.exception.GreenFeetException;
import es.uma.informatica.swe.greenfeet.hereApi.HereApi;
import es.uma.informatica.swe.greenfeet.location.LocationService;
import es.uma.informatica.swe.greenfeet.route.mode.TransportMode;
import es.uma.informatica.swe.greenfeet.user.UserRepository;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Null;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import static es.uma.informatica.swe.greenfeet.route.mode.TransportMode.*;

@Service
public class RouteService {

    private final RouteRepository routeRepository;

    private final UserRepository userRepository;

    public RouteService(RouteRepository routeRepository, UserRepository userRepository) {
        this.routeRepository = routeRepository;
        this.userRepository = userRepository;
    }

    public List<Route> findRoute(String startingPosition, String destination, String type, String transportMode) {
        try {
            double averageFualConsumption = 0;

            switch (valueOf(transportMode.toUpperCase())) {
                case PEDESTRIAN:
                case BICYCLE: averageFualConsumption = 0; break;
                case PUBLIC_TRANSPORT: averageFualConsumption = 0.6; break;
                case CAR: averageFualConsumption = 6.5; break;
            }

            HereApi hereApi = new HereApi();
            String url = String.format(hereApi.getApi(), startingPosition, destination, type.toLowerCase() + ";" + getTransportMode(transportMode), averageFualConsumption);
            JsonNode possibleRoutes = hereApi.doGet(url).get("response").get("route");
            List<Route> routes = new ArrayList<>();

            possibleRoutes.iterator().forEachRemaining((possibleRoute) -> {
                JsonNode routeSummary = possibleRoute.get("summary");
                int distance = routeSummary.get("distance").asInt();
                int time = routeSummary.get("travelTime").asInt();
                double carbonEmissions = routeSummary.get("co2Emission").asDouble();

                routes.add(new Route(distance, time, carbonEmissions, type, transportMode));
            });

            return routes;

        } catch (NullPointerException e){
            throw new GreenFeetException("Wrong response from here", e);
        }
    }

    private String getTransportMode(String transportMode) {
        switch (valueOf(transportMode.toUpperCase())) {
            case PEDESTRIAN:        return "pedestrian";
            case BICYCLE:           return "bicycle";
            case PUBLIC_TRANSPORT:  return "publicTransport";
            case CAR:               return "car";
            default: return "";
        }
    }

    public List<Route> findByUserId(Long userId) {
        return routeRepository.findByUserId(userId)
                .orElseThrow(() -> new GreenFeetException("UserId " + userId + " not found"));
    }

    public Route create(Long userId, Route route) {
        return userRepository.findById(userId)
            .map(user -> {
                user.setCarbonFootprint(user.getCarbonFootprint() + route.getCarbonEmissions());
                route.setUser(user);

                return routeRepository.save(route);
            })
            .orElseThrow(() -> new GreenFeetException("User does not exit"));
    }

}
