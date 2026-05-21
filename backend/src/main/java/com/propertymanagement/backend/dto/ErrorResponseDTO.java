package com.propertymanagement.backend.dto;

import java.time.LocalDateTime;

public final class ErrorResponseDTO {

    private String message;
    private int status;
    private LocalDateTime creationTime;
    private String errorType;

    public ErrorResponseDTO(String message, int status, LocalDateTime creationTime, String errorType) {

        this.message = message;
        this.status = status;
        this.creationTime = creationTime;
        this.errorType = errorType;
    }

    public String getMessage() {
        return message;
    }

    public int getStatus() {
        return status;
    }

    public LocalDateTime getCreationTime() {
        return creationTime;
    }

    public String getErrorType() {
        return errorType;
    }
}
