package com.midasit.midascafe.security;

import com.midasit.midascafe.entity.UserRole;
import com.midasit.midascafe.utils.JwtUtil;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class LoginInterceptor implements HandlerInterceptor {






    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{



        Cookie[] cookies = request.getCookies();
        String jwt = cookies[0].getValue();
        String uri = request.getRequestURI();

        if(jwt==null) throw new Exception("no token");

        JwtUtil jwtUtil = new JwtUtil();
        UserRole userRole = jwtUtil.AuthJwt(jwt);

        if(userRole == null){
            response.sendRedirect("/login");
            return false;
        }





        // 인증 여부 판단하여 로그인 페이지로 보낼 로직 구현..?



        return true;
    }

}
