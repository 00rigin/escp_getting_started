package com.midasit.midascafe.controller;

import com.midasit.midascafe.dto.UserDto;

import com.midasit.midascafe.service.AuthService;
import com.midasit.midascafe.service.UserService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {

    private final UserService userService;
    private final AuthService authService;

    // 22.06.29 FE 연동을 위해 토큰만 전송
    @PostMapping("/login")
    public String LoginUsers(@RequestBody UserDto data) throws Exception {

        System.out.println(data);
        System.out.println(data.getUserEmail());
        System.out.println(data.getUserName());

        // DB check
        boolean userTrue = userService.isUserInDB(data);
        if(!userTrue) throw new Exception("wrong in user identification");
        // make token
        return authService.createToken(data);

    }
//    @PostMapping("/login")
//    public Cookie LoginUsers(@RequestBody UserDto data) throws Exception {
//
//        System.out.println(data);
//        System.out.println(data.getUserEmail());
//        System.out.println(data.getUserName());
//
//        // DB check
//        boolean userTrue = userService.isUserInDB(data);
//        if(!userTrue) throw new Exception("wrong in user identification");
//        // make token
//        return authService.createToken(data);
//
//    }

}
