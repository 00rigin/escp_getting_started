package com.midasit.midascafe.dto;

import com.midasit.midascafe.entity.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AuthDto {
    private String token;
    private UserRole role;

    static public AuthDto DtoAuth(String token, UserRole role){
        return new AuthDto(token, role);
    }

}
