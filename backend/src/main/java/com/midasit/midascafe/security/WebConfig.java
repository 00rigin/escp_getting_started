package com.midasit.midascafe.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry){

        registry.addInterceptor(new AnanimousInterceptor())
                .addPathPatterns("/signup", "/menusByCategory", "/menus", "/login");

        registry.addInterceptor(new UserInterceptor())
                .addPathPatterns("/orders", "/orderListByUser");

        registry.addInterceptor(new AdminInterceptor())
                .addPathPatterns("/setMenu", "/updateMenu", "deleteMenu", "/orderListByAdmin", "/orderListOnWait");

    }
}
