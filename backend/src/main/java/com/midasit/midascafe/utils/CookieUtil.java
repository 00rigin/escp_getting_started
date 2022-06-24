package com.midasit.midascafe.utils;

import javax.servlet.http.Cookie;

public class CookieUtil {

    // 쿠키 만드는 곳
    public Cookie createCookie(String cookieName, String tokenData){
        Cookie token = new Cookie(cookieName,tokenData);
        token.setMaxAge((int)JwtUtil.TOKEN_VALIDATION_TIME);
        token.setPath("/");
        return token;
    }
}
