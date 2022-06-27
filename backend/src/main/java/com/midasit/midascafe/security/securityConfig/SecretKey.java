package com.midasit.midascafe.security.securityConfig;

public enum SecretKey {
    SECRETKEY("HyunjunyoonJJangJJangMan");

    private final String value;
    SecretKey(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
