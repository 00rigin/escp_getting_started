package com.midasit.midascafe.repository;

import com.midasit.midascafe.entity.Order;
import com.midasit.midascafe.entity.Status;
import com.midasit.midascafe.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByUserID(User id);
    List<Order> findByOrderStatus(Status state);





}
