import axios from "axios"
import {CoffeeRs} from "../interfaces/rs/coffeeRs";

export const postOrder = (props:CoffeeRs) => {
    return axios.post('http://localhost:8080/orders', {menuName: props.menuName});
};

export const getOrderList = () => {
    return axios.get('http://localhost:8080/orderList');
};