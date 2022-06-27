package com.midasit.midascafe.repository;

import com.midasit.midascafe.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {

    Optional<Order> findByUserID(Long id);





}
