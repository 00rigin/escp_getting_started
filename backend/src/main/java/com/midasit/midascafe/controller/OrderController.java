package com.midasit.midascafe.controller;

import com.midasit.midascafe.dto.OrderDto;
import com.midasit.midascafe.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {

    private final OrderService orderService;

    // [POST] 메뉴를 주문할 수 있다.
    @PostMapping("/orders") // body-json 사용 // get find 차이 알아보고 변환해보기
    public void OrderMenu(@RequestBody String menuName){
        orderService.orderMenu(menuName);
    }

    @PutMapping("/updateRequest")
    public void UpdateStatus(@RequestBody OrderDto data){ // order id, status 받음
        orderService.updateStatus(data);
    }

    @GetMapping("/orderList")
    public List<OrderDto> ShowOrders(){
        return orderService.showOrders();
    }

    @GetMapping("/orderByMonth")
    public List<OrderDto> ShowOrders(@RequestParam Long month){
        return orderService.showOrdersByMonth(month);
    }

}
