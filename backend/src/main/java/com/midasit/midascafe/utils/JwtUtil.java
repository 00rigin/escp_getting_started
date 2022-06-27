package com.midasit.midascafe.utils;

import com.midasit.midascafe.dto.UserDto;

import com.midasit.midascafe.entity.User;
import com.midasit.midascafe.entity.UserRole;
import com.midasit.midascafe.security.securityConfig.JwtValidTime;
import com.midasit.midascafe.security.securityConfig.SecretKey;
import io.jsonwebtoken.*;

import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Component
public class JwtUtil {

    public final static String ACCESS_TOKEN = "accessToken";

    public String CreateJwt(User data){

        // 토큰 생성
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        Date expireTime  = new Date();
        expireTime.setTime(expireTime.getTime() + JwtValidTime.TOKEN_VALIDATION_TIME.getValue());
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(SecretKey.SECRETKEY.getValue());
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());

        Map<String, Object> headerMap = new HashMap<String, Object>();

        headerMap.put("typ", "JWT");
        headerMap.put("alg", "HS256");

        Map<String, Object> map = new HashMap<String, Object>();

        String userName = data.getName();
        UserRole role = data.getUserRole();
        String userEmail = data.getUserEmail();

        map.put("userName", userName);
        map.put("userRole", role);
        map.put("userEmail", userEmail);

        JwtBuilder builder = Jwts.builder().setHeader(headerMap)
                .setClaims(map)
                .setExpiration(expireTime)
                .signWith(signatureAlgorithm, signingKey);

        String newToken = builder.compact();
        return builder.compact();
    }

    public UserRole AuthJwt(String token){
        try {
            Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(SecretKey.SECRETKEY.getValue()))
                    .parseClaimsJws(token).getBody();

            System.out.println("Right token");
            System.out.println("expireTime :" + claims.getExpiration());
            System.out.println("userName :" + claims.get("userName"));
            System.out.println("userEmail : "+claims.get("userEmail"));

            return UserRole.valueOf(claims.get("userRole").toString());
        } catch (ExpiredJwtException exception) {
            System.out.println("token expired");
            return null;
        } catch (JwtException exception) {
            System.out.println("wrong token");
            return null;
        }
    }

    public String AuthUserEmail(HttpServletRequest request){

        String token = request.getCookies()[0].getValue();
        Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(SecretKey.SECRETKEY.getValue()))
                .parseClaimsJws(token).getBody();

        return claims.get("userEmail").toString();

    }

}
