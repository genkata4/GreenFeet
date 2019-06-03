package es.uma.informatica.swe.greenfeet;

import es.uma.informatica.swe.greenfeet.user.User;
import es.uma.informatica.swe.greenfeet.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.stream.LongStream;

@SpringBootApplication
public class GreenFeetApplication {

    public static void main(String[] args) {
        SpringApplication.run(GreenFeetApplication.class, args);
    }

    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://127.0.0.1:3000");
            }
        };
    }

}
