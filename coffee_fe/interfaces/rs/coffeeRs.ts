export interface CoffeeRs {
    menuId: number;
    menuName: string;
    category: string;
}

export interface OrderRs {
    orderID: number;
    orderDate: string;
    orderStatus: string;
    menuId: number;
    orderMenu: string;
}

