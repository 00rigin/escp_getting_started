export interface CoffeeRq {
    name: string;
}

export interface OrderRq {
    orderID: number;
    orderDate: string;
    orderStatus: string;
    menuId: number;
    orderMenu: string;
}