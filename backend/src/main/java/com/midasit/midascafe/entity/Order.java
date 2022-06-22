package com.midasit.midascafe.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
//    @Id
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "order_id")
    private Long orderID;

    @OneToOne
    @JoinColumn(name = "menu_id")
    private Menu menuID;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User userID;

    @Enumerated(EnumType.STRING)
    @Column(name = "order_status")
    private Status orderStatus;

    @Column(name = "order_date")
    private LocalDateTime orderDate;

    public Long getOrderID() {
        return orderID;
    }

    public void setOrderID(Long orderID) {
        this.orderID = orderID;
    }

    public Status getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(Status orderStatus) {
        this.orderStatus = orderStatus;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public Menu getMenuID() {
        return menuID;
    }

    public void setMenuID(Menu menuID) {
        this.menuID = menuID;
    }
}
