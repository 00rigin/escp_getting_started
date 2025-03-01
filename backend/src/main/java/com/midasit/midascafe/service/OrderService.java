package com.midasit.midascafe.service;


import com.midasit.midascafe.dto.OrderDto;
import com.midasit.midascafe.dto.UserDto;
import com.midasit.midascafe.entity.Order;
import com.midasit.midascafe.entity.Status;
import com.midasit.midascafe.entity.User;
import com.midasit.midascafe.repository.MenuRepository;
import com.midasit.midascafe.repository.OrderRepository;
import com.midasit.midascafe.repository.UserRepository;
import com.midasit.midascafe.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final MenuRepository menuRepository;
    private final UserRepository userRepository;

    private final JwtUtil jwtUtil;

    public void orderMenu(OrderDto data, HttpServletRequest request){

        LocalDateTime now = LocalDateTime.now();

        Order order = new Order();
        order.setOrderStatus(Status.wait);
        order.setOrderDate(now);

        // 쿠키에 있는 유저 이메일로 주문자 판단
        String userEmail = jwtUtil.AuthUserEmail(request);

        order.setMenuID(menuRepository.findByMenuName(data.getOrderMenu()).get());
        order.setUserID(userRepository.findByUserEmail(userEmail).get());

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
        List userOrderList = orderList.stream().map(order -> OrderDto.DtoOrder(order)).collect(Collectors.toList());

        return userOrderList;
    }
    public List<OrderDto> showOrdersByMonth(@RequestParam Long month){
        return findByMonth(month);
    }

    // user가 자신의 주문 내역 볼때 사용
    public List<OrderDto> showOrdersByUsers(HttpServletRequest request){

        // 쿠키에 있는 유저 이메일로 주문자 판단
        String userEmail = jwtUtil.AuthUserEmail(request);
        User data = userRepository.findByUserEmail(userEmail).get();
        List<Order> usersOrders = orderRepository.findByUserID(data);
        List userOrderList = usersOrders.stream().map(order -> OrderDto.DtoOrder(order)).collect(Collectors.toList());

        return userOrderList;
    }

    //admin이 특정 사용자의 주문 내역 볼 때 사용
    public List<OrderDto> showOrdersByAdmin(UserDto user){

        User data = userRepository.findByUserEmail(user.getUserEmail()).get();
        List<Order> usersOrders = orderRepository.findByUserID(data);
        List userOrderList = usersOrders.stream().map(order -> OrderDto.DtoOrder(order)).collect(Collectors.toList());

        return userOrderList;
    }

    public List<OrderDto> showOrdersOnWait(){

        List<Order> usersOrders = orderRepository.findByOrderStatus(Status.wait);
        List userOrderList = usersOrders.stream().map(order -> OrderDto.DtoOrder(order)).collect(Collectors.toList());

        return userOrderList;
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
