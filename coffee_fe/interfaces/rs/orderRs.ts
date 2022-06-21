import {CoffeeRs} from "./coffeeRs";

export interface OrderRs {
    orderID: number;
    orderDate: string;
    orderStatus: string;
    menuID: CoffeeRs;
    orderMenu: string;
}

