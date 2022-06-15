package com.midasit.midascafe.service;

import com.fasterxml.jackson.databind.util.BeanUtil;
import com.midasit.midascafe.entity.Menu;
import com.midasit.midascafe.repository.MenuRepository;
import com.midasit.midascafe.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;
    private final OrderRepository orderRepository;


    public List<Menu> showMenuList(){ // 메뉴 전체 보여주기
        return menuRepository.findAll();
    }

//    public List<Menu> showMenuListByCategory(String category){
//        return menuRepository.findByCategory(category);
//    }

//    public Menu createMenu(MenuCreationRequest request){
//        Menu menuToCreate = new Menu();
//        BeanUtils.copyProperties(request, menuToCreate); // 스프링의 객체 프로퍼티 복사
//        return menuRepository.save(menuToCreate);
//    }

//    public Menu updateMenu(Long id, MenuUpdateRequest request){
//        Menu menuToUpdate = menuRepository.findById(id).get();
////
//////        Menu menu = menuToUpdate.get();
////        menu.setMenuName(request.getMenuName());
////        menu.setCategory(request.getCategory());
////
////        return menuRepository.save(menu);
//    }
//
//    public









}
