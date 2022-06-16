package com.midasit.midascafe.repository;

import com.midasit.midascafe.entity.Category;
import com.midasit.midascafe.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MenuRepository extends JpaRepository<Menu, Long> {

    List<Menu> findByCategory(Category category);

    Optional<Menu> findByMenuName(String menuName);

}
