package com.midasit.midascafe.controller;

import com.midasit.midascafe.entity.User;
import com.midasit.midascafe.repository.UserRepository;
import com.midasit.midascafe.utils.CookieUtil;
import com.midasit.midascafe.utils.JwtUtil;
import com.midasit.midascafe.utils.CookieUtil;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;

@RestController
@AllArgsConstructor
public class AuthController {

    private final UserRepository userRepository;

    @GetMapping("/login")
    public Cookie LoginUsers(@RequestBody User data) throws Exception {

        // DB check
        String userName = data.getName();
        String userMail = data.getUserEmail();
        User user = userRepository.findByUserEmail(userMail).get();
        if(user == null) throw new Exception("user is not exist");
        if(!userName.equals(user.getName())) throw new Exception("user is exist. But wrong name");

        // make token
        JwtUtil jwt = new JwtUtil();
        String newToken = jwt.CreateJwt(data);
        // cookie
        CookieUtil cookieUtil = new CookieUtil();
        Cookie token = cookieUtil.createCookie(JwtUtil.ACCESS_TOKEN, newToken);


        // return token
        return token;
    }



}
