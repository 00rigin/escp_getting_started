package com.midasit.midascafe.controller;

import com.midasit.midascafe.dto.UserDto;

import com.midasit.midascafe.service.AuthService;
import com.midasit.midascafe.service.UserService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;

@RestController
@AllArgsConstructor
public class AuthController {

    private final UserService userService;
    private final AuthService authService;
    @PostMapping("/login")
    public Cookie LoginUsers(@RequestBody UserDto data) throws Exception {

        // DB check
        boolean userTrue = userService.isUserInDB(data);
        if(!userTrue) throw new Exception("wrong in user identification");
        // make token
        return authService.createToken(data);

    }

}
