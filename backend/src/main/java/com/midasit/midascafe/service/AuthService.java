package com.midasit.midascafe.service;

import com.midasit.midascafe.dto.UserDto;
import com.midasit.midascafe.entity.User;
import com.midasit.midascafe.repository.UserRepository;
import com.midasit.midascafe.utils.CookieUtil;
import com.midasit.midascafe.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    public Cookie createToken(UserDto dtoData){
        // get DB data
        User data = userRepository.findByUserEmail(dtoData.getUserEmail()).get();
        //make token
        JwtUtil jwt = new JwtUtil();
        String newToken = jwt.CreateJwt(data);
        // cookie
        CookieUtil cookieUtil = new CookieUtil();
        javax.servlet.http.Cookie token = cookieUtil.createCookie(JwtUtil.ACCESS_TOKEN, newToken);
        // return token
        return token;
    }
}
