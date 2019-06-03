package es.uma.informatica.swe.greenfeet.location;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

    Optional<Location> findByTitle(String title);

    Optional<Location> findByPosition(String position);

}
