package com.midasit.midascafe.security;

import com.midasit.midascafe.entity.UserRole;
import com.midasit.midascafe.utils.JwtUtil;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;

public class UserInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{

//        Cookie[] cookies = request.getCookies();
//        String uri = request.getRequestURI().split("\\?")[0];

//        System.out.println(uri);

        // for FE sync
        if(request.getMethod().equals("OPTIONS"))
            return true;
        String jwt = request.getHeader(HttpHeaders.AUTHORIZATION);
        System.out.println(jwt);

//
//        // No cookie
//        if(cookies == null){
//            System.out.println("No cookie");
//            return false;
//        }
//
//        String jwt = cookies[0].getValue();

        // No token
        if(jwt==null){
            System.out.println("No token");
            return false;
        }

        JwtUtil jwtUtil = new JwtUtil();
        UserRole userRole = jwtUtil.AuthJwt(jwt);


        if(userRole.equals(UserRole.user)||userRole.equals(UserRole.admin)) return true;
        else return false;

//        return false;
    }
}
