package es.uma.informatica.swe.greenfeet.location;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import es.uma.informatica.swe.greenfeet.exception.GreenFeetException;
import es.uma.informatica.swe.greenfeet.hereApi.HereApi;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;

@Service
public class LocationService {

    private final LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) { this.locationRepository = locationRepository; }

    public List<Location> findPlace(String place) {
        try {
            HereApi hereApi = new HereApi();
            String url = String.format(hereApi.getApi(), place);
            JsonNode json = hereApi.doGet(url);

            return hereApi
                    .getObjectMapper()
                    .readerFor(new TypeReference<List<Location>>() { })
                    .readValue(json);

        } catch (IOException e) {
            throw new GreenFeetException("Manipulation with locations json object failed", e);
        }
    }

    public Location create(Location location) {
        return locationRepository.save(location);
    }

}
