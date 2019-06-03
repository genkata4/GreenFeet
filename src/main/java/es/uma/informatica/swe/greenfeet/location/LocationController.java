package es.uma.informatica.swe.greenfeet.location;

import es.uma.informatica.swe.greenfeet.exception.GreenFeetException;
import es.uma.informatica.swe.greenfeet.route.Route;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/location")
@CrossOrigin(maxAge = 3600)
public class LocationController {

    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping(value = "/{place}")
    public ResponseEntity<?> findPlace(@PathVariable String place) {
        try {
            return ResponseEntity
                    .ok()
                    .body(locationService.findPlace(place));
        } catch (GreenFeetException e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .build();
        }
    }

}
