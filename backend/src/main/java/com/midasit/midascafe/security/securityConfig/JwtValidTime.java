package com.midasit.midascafe.security.securityConfig;

public enum JwtValidTime {
    TOKEN_VALIDATION_TIME(1000L*1000L*60);

    private final long value;
    JwtValidTime(long value) {
        this.value = value;
    }

    public long getValue() {
        return value;
    }
}
