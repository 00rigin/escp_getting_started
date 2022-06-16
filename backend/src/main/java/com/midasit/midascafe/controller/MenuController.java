package com.midasit.midascafe.controller;

import com.midasit.midascafe.entity.Category;
import com.midasit.midascafe.entity.Menu;
import com.midasit.midascafe.repository.MenuRepository;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.json.JSONParser;
import org.h2.util.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.lang.reflect.Array;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class MenuController {

    private final MenuRepository menuRepository;

    // [GET] 모든 메뉴 리스트를 보여줄 수 있다.
    @GetMapping("/menus")
    public List<Menu> GetMenus(String id){
        return menuRepository.findAll();
    }

    // [GET] 카테고리 별로 나눠서 메뉴 리스트를 보여줄 수 있다.
    // /menusByCategory?category=etc
    @GetMapping("/menusByCategory") // RequestParam 사용  menusByCategory?category=tea
    public List<Menu> GetMenusByCategory(@RequestParam String category){
        return menuRepository.findByCategory(Category.valueOf(category));
    }

    // [POST] 메뉴를 추가할 수 있다.
    //    {
//            "menuName" : "Sprite",
//            "category" : "etc"
//    }
    @PostMapping("/setMenu") // body-json 사용
    public void PostMenu(@RequestBody Menu data){

        Menu menu = new Menu();
        menu.setMenuName(data.getMenuName());
        menu.setCategory(data.getCategory());
        menuRepository.save(menu);

    }

    // [PUT] 메뉴를 수정할 수 있다.

//    {
//        "menuId" : 11,
//            "menuName" : "Sprite",
//            "category" : "etc"
//    }

    // [PUT] 메뉴를 수정할 수 있다.
    @PutMapping("/updateMenu")// 트랜잭션 걸어서 save 없이 객체 세팅만으로 DB 저장 되게 변환해보기 (put과 post의 차이를 이를 통해 알아보자)
    @Transactional
    public void UpdateMenu(@RequestBody Menu data){

//        Optional<Menu> menu = menuRepository.findById(newMenu.getMenuId());

        Menu menu = menuRepository.findById(data.getMenuId()).get();
        menu.setMenuName(data.getMenuName());
        menu.setCategory(data.getCategory());
//        menuRepository.save(menu);
    }

    // [DELETE] 메뉴를 삭제할 수 있다.
    @DeleteMapping("/deleteMenu")
    public void DeleteMenu(@RequestParam Long id){
        menuRepository.deleteById(id);
    }
}
