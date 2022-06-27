package com.midasit.midascafe.dto;


import com.midasit.midascafe.entity.Category;
import com.midasit.midascafe.entity.Order;
import com.midasit.midascafe.entity.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor

public class OrderDto {
    private String userEmail;
    private Long orderId;
    private LocalDateTime OrderDate;
    private Status OrderStatus;
    private String OrderMenu;
    private Category MenuCategory;

    public static OrderDto DtoOrder(Order order){
        return new OrderDto(null, order.getOrderID(), order.getOrderDate(), order.getOrderStatus(), order.getMenuID().getMenuName(), order.getMenuID().getCategory());
    }
}
