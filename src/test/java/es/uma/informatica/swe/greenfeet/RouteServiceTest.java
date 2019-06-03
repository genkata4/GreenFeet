package es.uma.informatica.swe.greenfeet;

import es.uma.informatica.swe.greenfeet.exception.GreenFeetException;
import es.uma.informatica.swe.greenfeet.route.Route;
import es.uma.informatica.swe.greenfeet.route.RouteRepository;
import es.uma.informatica.swe.greenfeet.route.RouteService;
import es.uma.informatica.swe.greenfeet.user.User;
import es.uma.informatica.swe.greenfeet.user.UserRepository;
import org.junit.Rule;
import org.junit.jupiter.api.Test;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class RouteServiceTest {

    @Rule
    public MockitoRule mockitoRule = MockitoJUnit.rule();

    private RouteRepository routeRepository = mock(RouteRepository.class);

    private UserRepository userRepository = mock(UserRepository.class);

    private RouteService routeService = new RouteService(routeRepository, userRepository);

    @Test
    void create__userExits() {
        Long userId = 1L;
        User user = new User(userId, "user");
        User userWithCarbonFootprint = new User(userId, "user");
        Route route = new Route(20, 5, 15, "FASTEST", "CAR");
        Route routeWithUser = new Route(20, 5, 15, "FASTEST", "CAR");

        userWithCarbonFootprint.setCarbonFootprint(15);
        routeWithUser.setUser(userWithCarbonFootprint);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(routeRepository.save(route)).thenReturn(routeWithUser);

        assertEquals(0, user.getCarbonFootprint());
        assertEquals(routeWithUser, routeService.create(userId, route));
        assertEquals(userWithCarbonFootprint, routeService.create(userId, route).getUser());
        assertEquals(15, routeService.create(userId, route).getUser().getCarbonFootprint());
    }

    @Test
    void create__userNotExits() {
        Long userId = 1L;
        Route route = new Route(20, 5, 15, "FASTEST", "CAR");

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        assertThrows(GreenFeetException.class, () -> routeService.create(userId, route));
    }

}
