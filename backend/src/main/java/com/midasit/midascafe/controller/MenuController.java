package com.midasit.midascafe.controller;

import com.midasit.midascafe.dto.MenuDto;
import com.midasit.midascafe.service.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;


@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MenuController {

    private final MenuService menuService;

    @GetMapping("/menus")
    public List<MenuDto> GetMenus(String id){
        return menuService.getMenus();
    }

    @GetMapping("/menusByCategory") // RequestParam 사용  menusByCategory?category=tea
    public List<MenuDto> GetMenusByCategory(@RequestParam String category){
        return menuService.getMenusByCategory(category);
    }

    @PostMapping("/setMenu") // body-json 사용
    public void PostMenu(@RequestBody MenuDto data){
        menuService.postMenu(data);
    }

    // [PUT] 메뉴를 수정할 수 있다.
    @PutMapping("/updateMenu")// 트랜잭션 걸어서 save 없이 객체 세팅만으로 DB 저장 되게 변환해보기 (put과 post의 차이를 이를 통해 알아보자)
    @Transactional
    public void UpdateMenu(@RequestBody MenuDto data){
        menuService.updateMenu(data);
    }

    // [DELETE] 메뉴를 삭제할 수 있다.
    @DeleteMapping("/deleteMenu")
    public void DeleteMenu(@RequestParam Long menuId){
        menuService.deleteMenu(menuId);
    }

}
