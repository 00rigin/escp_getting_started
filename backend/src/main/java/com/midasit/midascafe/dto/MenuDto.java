package com.midasit.midascafe.dto;


import com.midasit.midascafe.entity.Category;
import com.midasit.midascafe.entity.Menu;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class MenuDto {
    private Long menuId;
    private String menuName;
    private int menuPrice;
    private Category category;
    private String menuDescription;


    static public MenuDto DtoMenu(Menu menu){
        return new MenuDto(null, menu.getMenuName(), menu.getMenuPrice(), menu.getCategory(), menu.getMenuDescription());
    }
}
