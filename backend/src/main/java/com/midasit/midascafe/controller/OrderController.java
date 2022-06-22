package com.midasit.midascafe.controller;

import com.midasit.midascafe.entity.Menu;
import com.midasit.midascafe.entity.Order;
import com.midasit.midascafe.entity.Status;
import com.midasit.midascafe.repository.MenuRepository;
import com.midasit.midascafe.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {

    private final OrderRepository orderRepository;
    private final MenuRepository menuRepository;

    // [POST] 메뉴를 주문할 수 있다.
    @PostMapping("/orders") // body-json 사용 // get find 차이 알아보고 변환해보기
    public void OrderMenu(@RequestBody Menu menuName){

        LocalDateTime now = LocalDateTime.now();

        Order order = new Order();
        order.setOrderStatus(Status.wait);
        order.setOrderDate(now);

        Menu orderMenu = menuRepository.findByMenuName(menuName.getMenuName()).get();

        order.setMenuID(orderMenu);

        orderRepository.save(order);

    }

    @PutMapping("/updateRequest")
    public void UpdateStatus(@RequestBody Order data){ // order id, status 받음

        // getById -> proxy 객체만 가져오게됨.

       Order oldOrder = orderRepository.findById(data.getOrderID()).get();
        oldOrder.setOrderStatus(data.getOrderStatus());
        orderRepository.save(oldOrder);

    }

    @GetMapping("/orderList")
    public List<Order> ShowOrders(){
        return orderRepository.findAll();
    }


    @GetMapping("/orderByMonth")
    public List<Order> ShowOrders(@RequestParam Long month){
        return findByMonth(month);
    }

    public List<Order> findByMonth(Long month){

        List<Order> nowOrders = orderRepository.findAll();

        List<Order> monthOrders = new ArrayList<Order>();
        for(int i= 0; i< nowOrders.size(); i++){
            if(nowOrders.get(i).getOrderDate().getMonthValue() == month){

                monthOrders.add(nowOrders.get(i));
            }

        }

        return monthOrders;
    }


}
