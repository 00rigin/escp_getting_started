package com.midasit.midascafe.dto;

import com.midasit.midascafe.entity.User;
import com.midasit.midascafe.entity.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserDto {

    private String userName;
    private UserRole userRole;
    private String userEmail;
    private String userPhonenumber;

    public static UserDto dtoUser(User data){
        return new UserDto(data.getName(), data.getUserRole(), data.getUserEmail(), data.getUserPhonenumber());
    }
}
