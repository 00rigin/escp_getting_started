import axios from "axios"
import {CoffeeRs} from "../interfaces/rs/coffeeRs";
import {OrderRs} from "../interfaces/rs/orderRs";
import {OrderListRq} from "../interfaces/rq/orderRq";
import {UpdateMenuRq} from "../interfaces/rq/updateMenuRq";
import {CreateMenuRq} from "../interfaces/rq/createMenuRq";

// export const sendCreateMenu = (props:CoffeeRs) => {
//
//     return axios.post('http://localhost:8080/orders',
//         {orderMenu: props.menuName},
//         {headers:{
//                 withCredentials: true,
//             }});
// };


export const sendDeleteMenu = (menuName: string) => {
    return axios.delete('http://localhost:8080/deleteMenu',
        {params:{menuName: menuName}});
};

export const updateMenu = (props: UpdateMenuRq) =>{
    return axios.put('http://localhost:8080/updateMenu',
        props);
};
export const createMenu = (props: CreateMenuRq) =>{
    return axios.post('http://localhost:8080/setMenu',
        props);
};
//
// export const getOrderListByUser =  async (props: OrderListRq): Promise<OrderRs[]> => {
//     const returnData = await axios.get('http://localhost:8080/orderListByAdmin',
//         {params: {userEmail: props.userEmail}});
//     return returnData.data;
// };