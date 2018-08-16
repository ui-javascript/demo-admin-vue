package space.qmen.lot.exception;

public class ServiceException extends BaseException {

    public ServiceException() {
    }

    public ServiceException(int status) {
        super(status);
    }

    public ServiceException(int status, String message) {
        super(status, message);
    }

    public ServiceException(Throwable cause) {
        super(cause);
    }

    public ServiceException(int status, String message, Throwable cause) {
        super(status, message, cause);
    }
}