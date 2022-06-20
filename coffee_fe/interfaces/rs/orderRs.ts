import {CoffeeRs} from "./coffeeRs";

export interface OrderRs {
    orderID: number;
    orderDate: string;
    orderStatus: string;
    menuId: CoffeeRs[];
    orderMenu: string;
}

