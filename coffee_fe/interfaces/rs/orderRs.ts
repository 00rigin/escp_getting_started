import {CoffeeRs} from "./coffeeRs";

// export interface OrderRs {
//     orderID: number;
//     orderDate: string;
//     orderStatus: string;
//     menuID: CoffeeRs;
//     orderMenu: string;
// }

export interface OrderRs{
    userEmail: string;
    orderId: number;
    orderDate: string;
    orderStatus: string;
    orderMenu: string;
    menuCategory: string;


}

