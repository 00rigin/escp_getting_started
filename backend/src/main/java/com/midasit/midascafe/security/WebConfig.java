package com.midasit.midascafe.security;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedHeaders("*")
                .allowedMethods("*");
    }


    @Override
    public void addInterceptors(InterceptorRegistry registry){

        registry.addInterceptor(new UserInterceptor())
                .addPathPatterns("/orders", "/orderListByUser");

        registry.addInterceptor(new AdminInterceptor())
                .addPathPatterns("/setMenu", "/updateMenu", "deleteMenu", "/orderListByAdmin", "/orderListOnWait");

    }
}
