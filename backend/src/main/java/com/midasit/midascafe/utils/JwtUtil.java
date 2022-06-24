package com.midasit.midascafe.utils;

import com.midasit.midascafe.dto.UserDto;

import com.midasit.midascafe.entity.User;
import com.midasit.midascafe.entity.UserRole;
import io.jsonwebtoken.*;

import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Component
public class JwtUtil {

    public final static long TOKEN_VALIDATION_TIME = 1000L*1000L*60;
    public final static String ACCESS_TOKEN = "accessToken";
    private String secretKey = "HyunjunyoonJJangJJangMan";



    public String CreateJwt(User data){

        // 토큰 생성
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        Date expireTime  = new Date();
        expireTime.setTime(expireTime.getTime() + TOKEN_VALIDATION_TIME);
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(secretKey);
        Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());

        Map<String, Object> headerMap = new HashMap<String, Object>();

        headerMap.put("typ", "JWT");
        headerMap.put("alg", "HS256");

        Map<String, Object> map = new HashMap<String, Object>();

        String userName = data.getName();
        UserRole role = data.getUserRole();

        map.put("userName", userName);
        map.put("userRole", role);

        JwtBuilder builder = Jwts.builder().setHeader(headerMap)
                .setClaims(map)
                .setExpiration(expireTime)
                .signWith(signatureAlgorithm, signingKey);

        String newToken = builder.compact();
        return builder.compact();
    }

public UserRole AuthJwt(String token){
    try {
        Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(secretKey))
                .parseClaimsJws(token).getBody();

        System.out.println("Right token");
        System.out.println("expireTime :" + claims.getExpiration());
        System.out.println("userName :" + claims.get("userName"));

        return UserRole.valueOf(claims.get("userRole").toString());
    } catch (ExpiredJwtException exception) {
        System.out.println("token expired");
        return null;
    } catch (JwtException exception) {
        System.out.println("wrong token");
        return null;
    }
}

}
