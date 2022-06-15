package com.midasit.midascafe.entity;

import javax.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Column(
            length = 32,
            nullable = false
    )
    private String name;

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    ////////////////////////////////////////////////////////

    public static User register(String name) {
        User user = new User();
        user.name = name;
        return user;
    }
}
