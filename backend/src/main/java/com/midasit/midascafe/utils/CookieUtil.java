package com.midasit.midascafe.utils;

import javax.servlet.http.Cookie;
import com.midasit.midascafe.security.securityConfig.JwtValidTime;

public class CookieUtil {

    // 쿠키 만드는 곳
    public Cookie createCookie(String cookieName, String tokenData){
        Cookie token = new Cookie(cookieName,tokenData);
        token.setMaxAge((int)JwtValidTime.TOKEN_VALIDATION_TIME.getValue());
        token.setPath("/");
        return token;
    }
}
