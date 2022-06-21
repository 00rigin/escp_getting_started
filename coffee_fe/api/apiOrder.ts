import axios from "axios"
import {CoffeeRs} from "../interfaces/rs/coffeeRs";
import {OrderRs} from "../interfaces/rs/orderRs";

export const postOrder = (props:CoffeeRs) => {
    return axios.post('http://localhost:8080/orders', {menuName: props.menuName});
};

export const getOrderList = async ():Promise<OrderRs[]> => {
    const returnData = await axios.get('http://localhost:8080/orderList');
    return returnData.data;
};