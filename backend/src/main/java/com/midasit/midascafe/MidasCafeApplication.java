package com.midasit.midascafe;

import com.midasit.midascafe.entity.Category;
import com.midasit.midascafe.entity.Menu;
import com.midasit.midascafe.entity.Order;
import com.midasit.midascafe.entity.Status;
import org.aspectj.weaver.ast.Or;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

@SpringBootApplication
public class MidasCafeApplication {


    public static void main(String[] args) {
        SpringApplication.run(MidasCafeApplication.class, args);
    }


}
