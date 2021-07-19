package com.hoanganh.fullstackwithangular_hoanganh.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
