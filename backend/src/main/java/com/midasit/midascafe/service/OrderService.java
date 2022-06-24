package com.midasit.midascafe.service;


import com.midasit.midascafe.dto.OrderDto;
import com.midasit.midascafe.entity.Menu;
import com.midasit.midascafe.entity.Order;
import com.midasit.midascafe.entity.Status;
import com.midasit.midascafe.repository.MenuRepository;
import com.midasit.midascafe.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final MenuRepository menuRepository;

    public void orderMenu(String menuName){
        LocalDateTime now = LocalDateTime.now();

        Order order = new Order();
        order.setOrderStatus(Status.wait);
        order.setOrderDate(now);

        Menu orderMenu = menuRepository.findByMenuName(menuName).get();

        order.setMenuID(orderMenu);

        orderRepository.save(order);
    }

    public void updateStatus(OrderDto data){
        // getById -> proxy 객체만 가져오게됨.

        Order oldOrder = orderRepository.findById(data.getOrderId()).get();
        oldOrder.setOrderStatus(data.getOrderStatus());
        orderRepository.save(oldOrder);
    }

    public List<OrderDto> showOrders(){

        List<Order> orderList = orderRepository.findAll();
        List<OrderDto> returnOrderList = new ArrayList<OrderDto>();
        for(Order order : orderList){
            returnOrderList.add(OrderDto.DtoOrder(order));
        }
        return returnOrderList;
    }
    public List<OrderDto> showOrdersByMonth(@RequestParam Long month){
        return findByMonth(month);
    }

    public List<OrderDto> findByMonth(Long month){

        List<Order> nowOrders = orderRepository.findAll();
        List<OrderDto> monthOrders = new ArrayList<OrderDto>();

        for(int i= 0; i< nowOrders.size(); i++){
            if(nowOrders.get(i).getOrderDate().getMonthValue() == month){
                monthOrders.add(OrderDto.DtoOrder(nowOrders.get(i)));
            }
        }
        return monthOrders;
    }

}
