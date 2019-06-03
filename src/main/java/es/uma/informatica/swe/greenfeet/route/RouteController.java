package es.uma.informatica.swe.greenfeet.route;

import es.uma.informatica.swe.greenfeet.exception.GreenFeetException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/route")
@CrossOrigin(maxAge = 3600)
public class RouteController {

    private final RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @GetMapping(value = "/{startingPosition}/{destination}/{type}/{transportMode}")
    public ResponseEntity<?> findRoute(@PathVariable String startingPosition, @PathVariable String destination,
                                       @PathVariable String type, @PathVariable String transportMode) {
        try {
            return ResponseEntity
                    .ok()
                    .body(routeService.findRoute(startingPosition, destination, type, transportMode));
        } catch (GreenFeetException e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(e.getMessage());
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getAllRoutesByUserId(@PathVariable Long userId) {
        try {
            return ResponseEntity
                    .ok()
                    .body(routeService.findByUserId(userId));
        } catch (GreenFeetException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        }
    }

    @PostMapping("/user/{userId}")
    public ResponseEntity<?> create(@PathVariable Long userId, @RequestBody Route route) {
        try {
            return ResponseEntity
                    .ok()
                    .body(routeService.create(userId, route));
        } catch (GreenFeetException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        }
    }

}
