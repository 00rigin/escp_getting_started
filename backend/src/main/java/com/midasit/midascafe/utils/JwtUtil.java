package com.midasit.midascafe.utils;

import com.midasit.midascafe.entity.User;
import com.midasit.midascafe.entity.UserRole;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

@Component
public class JwtUtil {

    public final static long TOKEN_VALIDATION_TIME = 1000L*10;
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

}
