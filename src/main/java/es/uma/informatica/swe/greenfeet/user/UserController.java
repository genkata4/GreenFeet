package es.uma.informatica.swe.greenfeet.user;

import es.uma.informatica.swe.greenfeet.exception.GreenFeetException;
import es.uma.informatica.swe.greenfeet.route.Route;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(maxAge = 3600)
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping @ResponseBody
    public List<User> findAll() {
        return userService.findAll();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> findById(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok().body(userService.findById(id));
        } catch (GreenFeetException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value = "/name/{userName}")
    public ResponseEntity<?> findByUserName(@PathVariable("userName") String userName) {
        try {
            return ResponseEntity.ok().body(userService.findByUserName(userName));
        } catch (GreenFeetException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping(value = "/{userName}")
    public ResponseEntity<?> create(@PathVariable String userName) {
        try {
            return ResponseEntity.ok().body(userService.create(userName));
        } catch (GreenFeetException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String id, @RequestBody User user) {
        try {
            return ResponseEntity.ok().body(userService.update(Long.valueOf(id), user));
        } catch (GreenFeetException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id) {
        try {
            userService.delete(id);
            return ResponseEntity.ok().build();
        } catch (GreenFeetException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
