package es.uma.informatica.swe.greenfeet.user;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.io.Serializable;

@Entity
@Data @NoArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String userName;

    private double carbonFootprint;

    public User(String userName) {
        this.userName = userName;
        this.carbonFootprint = 0;
    }

    public User(Long id, String userName) {
        this(userName);
        this.id = id;
    }

}
