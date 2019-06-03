package es.uma.informatica.swe.greenfeet.hereApi;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import es.uma.informatica.swe.greenfeet.exception.GreenFeetException;

import java.io.IOException;
import java.io.InputStream;

public class HereApi {

    private ObjectMapper objectMapper = new ObjectMapper();

    private static final String API = "https://route.api.here.com/routing/7.2/calculateroute.json" +
            "?app_id=y0hzLKeDcZm2dCext5a8" +
            "&app_code=Sij7iBNJOLpdBLV9_KZhDw";

    public JsonNode doGet(String url) {
        try {
            InputStream inputStream = Unirest.get(url).asJson().getRawBody();

            return objectMapper.readTree(inputStream);

        } catch (UnirestException e) {
            throw new GreenFeetException("Fetching route from HERE maps failed", e);
        } catch (IOException e) {
            throw new GreenFeetException("Manipulation with json object failed", e);
        }
    }

    public ObjectMapper getObjectMapper() { return objectMapper; }

    public String getApi() { return API; }

}
