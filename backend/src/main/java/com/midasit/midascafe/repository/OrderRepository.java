package com.midasit.midascafe.repository;

import com.midasit.midascafe.entity.Category;
import com.midasit.midascafe.entity.Menu;
import com.midasit.midascafe.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {





}
