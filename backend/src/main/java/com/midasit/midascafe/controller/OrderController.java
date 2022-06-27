package com.midasit.midascafe.controller;

import com.midasit.midascafe.dto.OrderDto;
import com.midasit.midascafe.dto.UserDto;
import com.midasit.midascafe.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/orders")
    public void OrderMenu(@RequestBody OrderDto data ,HttpServletRequest request){
        orderService.orderMenu(data, request);
    }

    @PutMapping("/updateRequest")
    public void UpdateStatus(@RequestBody OrderDto data){ // order id, status 받음
        orderService.updateStatus(data);
    }

    @GetMapping("/orderList")
    public List<OrderDto> ShowOrderList(){
        return orderService.showOrders();
    }

    @GetMapping("/orderByMonth")
    public List<OrderDto> ShowOrderListByMonth(@RequestParam Long month){
        return orderService.showOrdersByMonth(month);
    }

    @GetMapping("/orderListByUser")
    public List<OrderDto> ShowOrderListByUser(HttpServletRequest request){
        return orderService.showOrdersByUsers(request);
    }
    @GetMapping("/orderListByAdmin")
    public List<OrderDto> ShowOrderListByAdmin(@RequestBody UserDto data){
        return orderService.showOrdersByAdmin(data);
    }

    @GetMapping("/orderListOnWait")
    public List<OrderDto> ShowOrderListOnWait(){
        return orderService.showOrdersOnWait();
    }


}
