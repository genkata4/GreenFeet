package es.uma.informatica.swe.greenfeet.exception;

public class GreenFeetException extends RuntimeException {

    public GreenFeetException(String message) {
        super(message);
    }

    public GreenFeetException(String message, Throwable cause) {
        super(message, cause);
    }
}
