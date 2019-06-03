package es.uma.informatica.swe.greenfeet;

import es.uma.informatica.swe.greenfeet.exception.GreenFeetException;
import es.uma.informatica.swe.greenfeet.user.User;
import es.uma.informatica.swe.greenfeet.user.UserRepository;
import es.uma.informatica.swe.greenfeet.user.UserService;
import org.junit.Rule;
import org.junit.jupiter.api.Test;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Rule
    public MockitoRule mockitoRule = MockitoJUnit.rule();

    private UserRepository userRepository = mock(UserRepository.class);

    private UserService userService = new UserService(userRepository);

    @Test
    void testFindByUserName__userExits() {
        when(userRepository.findByUserName("user")).thenReturn(Optional.of(new User("user")));

        User user = userService.findByUserName("user");

        assertEquals("user", user.getUserName());
        assertEquals(0, user.getCarbonFootprint());
    }

    @Test
    void testFindByUserName__userNotExits() {
        when(userRepository.findByUserName("user")).thenReturn(Optional.empty());

        assertThrows(GreenFeetException.class, () -> userService.findByUserName("user"));
    }

    @Test
    void testCreate__userNotExits() {
        User user = new User("user");

        when(userRepository.existsUserByUserName("user")).thenReturn(false);
        when(userRepository.save(user)).thenReturn(user);

        assertEquals("user", user.getUserName());
        assertEquals(0, user.getCarbonFootprint());
    }

    @Test()
    void testCreate__userExits() {
        when(userRepository.existsUserByUserName("user")).thenReturn(true);

        assertThrows(GreenFeetException.class, () -> userService.create("user"));
    }

    @Test
    void testUpdate__userExits() {
        Long id = 1L;
        User user = new User(id, "user");

        when(userRepository.findById(id)).thenReturn(Optional.of(user));
        when(userRepository.save(user)).thenReturn(user);

        assertEquals("user", user.getUserName());
        assertEquals(0, user.getCarbonFootprint());
        assertEquals(id, user.getId());
    }

    @Test()
    void testUpdate__userNotExits() {
        Long id = 1L;

        when(userRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(GreenFeetException.class, () -> userService.update(id, new User("user")));
    }

    @Test
    void testDelete__userNotExits() {
        Long id = 1L;

        when(userRepository.existsById(id)).thenReturn(false);

        assertThrows(GreenFeetException.class, () -> userService.delete(id));
    }


}
