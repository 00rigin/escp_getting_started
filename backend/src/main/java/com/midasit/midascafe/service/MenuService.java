package com.midasit.midascafe.service;


import com.midasit.midascafe.dto.MenuDto;
import com.midasit.midascafe.entity.Category;
import com.midasit.midascafe.entity.Menu;
import com.midasit.midascafe.repository.MenuRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;

    public List<MenuDto> getMenus(){
        List<Menu> menus = menuRepository.findAll();
        List<MenuDto> returnMenu = new ArrayList<MenuDto>();
        for(Menu menu : menus){
            returnMenu.add(MenuDto.DtoMenu(menu));
        }
        return returnMenu;
    }

    public List<MenuDto> getMenusByCategory(String category){
        List<Menu> menus = menuRepository.findByCategory(Category.valueOf(category));
        List<MenuDto> returnMenu = new ArrayList<MenuDto>();
        for(Menu menu : menus){
            returnMenu.add(MenuDto.DtoMenu(menu));
        }
        return returnMenu;
    }

    public void postMenu(MenuDto data){
        Menu menu = new Menu();
        menu.setMenuName(data.getMenuName());
        menu.setCategory(data.getCategory());
        menu.setMenuDescription(data.getMenuDescription());
        menu.setMenuPrice(data.getMenuPrice());
        menuRepository.save(menu);
    }

    public void updateMenu(MenuDto data){
        Menu menu = menuRepository.findById(data.getMenuId()).get();
        menu.setMenuName(data.getMenuName());
        menu.setCategory(data.getCategory());
        menu.setMenuPrice(data.getMenuPrice());
        menu.setMenuDescription(data.getMenuDescription());
    }

//    public void deleteMenu(Long menuId){
//        menuRepository.deleteById(menuId);
//    }
    public void deleteMenu(String menuName){
        menuRepository.deleteById(menuRepository.findByMenuName(menuName).get().getMenuId());
    }

}
