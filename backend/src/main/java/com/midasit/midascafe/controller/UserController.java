package com.midasit.midascafe.controller;

import com.midasit.midascafe.entity.User;
import com.midasit.midascafe.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class UserController {
    private final  UserRepository userRepository;


    @PostMapping("/users/signup")
    public void SignupUsers(@RequestBody User data){

        User newUser = new User();
        newUser.setName(data.getName());
        newUser.setUserEmail(data.getUserEmail());
        newUser.setUserRole(data.getUserRole());
        newUser.setUserPhonenumber(data.getUserPhonenumber());

        userRepository.save(newUser);
    }

    @GetMapping("/users/test-get")
    public Integer GetUsers() {
        List<User> users = userRepository.findAll();
        return users.size();
    }


}
