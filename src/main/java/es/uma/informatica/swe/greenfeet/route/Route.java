package es.uma.informatica.swe.greenfeet.route;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import es.uma.informatica.swe.greenfeet.location.Location;
import es.uma.informatica.swe.greenfeet.route.mode.RoutingType;
import es.uma.informatica.swe.greenfeet.route.mode.TransportMode;
import es.uma.informatica.swe.greenfeet.user.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data @NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "ignoreUnknown"})
public class Route implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade=CascadeType.ALL)
    @JoinColumn(name = "starting_point_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Location startingPoint;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade=CascadeType.ALL)
    @JoinColumn(name = "destination_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Location destination;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    User user;

    private RoutingType type;

    private TransportMode transportMode;

    private int distance;

    private int time;

    private double carbonEmissions;

    public Route(int distance, int time, double carbonEmissions, String type, String transportMode) {
        this.distance = distance;
        this.time = time;
        this.carbonEmissions = carbonEmissions;
        this.type = RoutingType.valueOf(type.toUpperCase());
        this.transportMode = TransportMode.valueOf(transportMode.toUpperCase());
    }

}
