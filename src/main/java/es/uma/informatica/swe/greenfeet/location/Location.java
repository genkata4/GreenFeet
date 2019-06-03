package es.uma.informatica.swe.greenfeet.location;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SortComparator;

import javax.persistence.*;
import java.io.Serializable;
import java.lang.reflect.Array;
import java.util.Arrays;

@Entity
@Data @NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Location implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    private String title;

    private double[] position;

    private String vicinity;

    private int distance;

    public Location(String title, double[] position, String vicinity, int distance) {
        this.title = title;
        this.position = position;
        this.vicinity = vicinity;
        this.distance = distance;
        this.id = null;
    }

    public Location(String id, String title, double[] position, String vicinity, int distance) {
        this(title, position, vicinity, distance);
    }

    @Override
    public String toString() {
        return "Location{" +
                ", id=" + id +
                ", title=" + title +
                ", position=" + Arrays.toString(position) +
                ", vicinity=" + vicinity +
                ", distance=" + distance +
                "}";
    }

}

