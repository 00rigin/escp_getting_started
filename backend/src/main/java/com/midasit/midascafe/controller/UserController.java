package com.midasit.midascafe.controller;

import com.midasit.midascafe.dto.UserDto;

import com.midasit.midascafe.service.UserService;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/users/signup")
    public void SignupUsers(@RequestBody UserDto data, HttpServletRequest res){
        userService.signupUsers(data);
    }

}
