package es.uma.informatica.swe.greenfeet.user;

import es.uma.informatica.swe.greenfeet.exception.GreenFeetException;
import es.uma.informatica.swe.greenfeet.route.Route;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) { this.userRepository = userRepository; }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new GreenFeetException("User with id " + id + " does not exit"));
    }

    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName)
                .orElseThrow(() -> new GreenFeetException("User with name " + userName + " does not exit"));
    }

    public User create(String userName) {
        if (userRepository.existsUserByUserName(userName))
            throw new GreenFeetException("User with name " + userName + " already exits and therefore cannot be created");

        return userRepository.save(new User(userName));
    }

    public User update(Long id, User user) {
        return userRepository.findById(id).map(oldUser -> {
            oldUser.setUserName(user.getUserName());
            return userRepository.save(oldUser);
        }).orElseThrow(() -> new GreenFeetException("User with id " + id + " does not exit and therefore cannot be updated"));
    }

    public void delete(Long id) {
        if (!userRepository.existsById(id))
            throw new GreenFeetException("User with id " + id + " does not exit and therefore cannot be deleted");

        userRepository.deleteById(id);
    }

}
