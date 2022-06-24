package com.midasit.midascafe.security;

import com.midasit.midascafe.entity.UserRole;
import com.midasit.midascafe.utils.JwtUtil;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.ArrayList;
import java.util.Arrays;

public class LoginInterceptor implements HandlerInterceptor {

    ArrayList<String> userPermissioned = new ArrayList<>(Arrays.asList("/login", "/orders", "/menus", "/orderList", "/menusByCategory", "/signup"));
    ArrayList<String> nonePermissioned = new ArrayList<>(Arrays.asList("/menus", "/menusByCategory", "/signup"));

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{

        Cookie[] cookies = request.getCookies();
        String uri = request.getRequestURI().split("\\?")[0];

        System.out.println(uri);

        // No cookie
        if(cookies == null){
            System.out.println("No cookie");
            for(String permissionUri : nonePermissioned){
                // 허용된 uri 접근
                if(uri.equals(permissionUri)) return true;
            }
            System.out.println("Not allowed to access to none role "+uri);
            return false;
        }

        String jwt = cookies[0].getValue();

        // No token
        if(jwt==null){
            System.out.println("No token");
            for(String permissionUri : nonePermissioned){
                if(uri.equals(permissionUri)) return true;
            }
            System.out.println("Not allowed to access to none role "+uri);
            return false;
        }

        JwtUtil jwtUtil = new JwtUtil();
        UserRole userRole = jwtUtil.AuthJwt(jwt);

        // Not a user or admin
        if(userRole == null){
            System.out.println("no role user");
            for(String permissionUri : nonePermissioned){
                if(uri.equals(permissionUri)) return true;
            }
            System.out.println("Not allowed to access to none role "+uri);
            return false;
        }

        // User
        else if(userRole.equals(UserRole.user)){
            System.out.println("user");
            for(String permissionUri : userPermissioned){
                if(uri.equals(permissionUri)) return true;
            }
            System.out.println("Not allowed to access to user "+uri);
            return false;
        }
        // Admin
        else return true;

    }

}
