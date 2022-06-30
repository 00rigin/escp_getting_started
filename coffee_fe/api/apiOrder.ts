import axios from "axios"
import {CoffeeRs} from "../interfaces/rs/coffeeRs";
import {OrderRs} from "../interfaces/rs/orderRs";
import {getCookie} from "../utils/cookieUtil";

export const postOrder = (props:CoffeeRs) => {
    const headers = getCookie('orderToken');

    console.log(headers);

    return axios.post('http://localhost:8080/orders',
        {menuName: props.menuName},
        {headers:{
            withCredentials: true,
            Authorization: "jerkkhfeksfsd",
        }});
    // return axios.post('http://localhost:8080/orders', {menuName: props.menuName});
};
// withCredentials:true

export const getOrderList = async ():Promise<OrderRs[]> => {
    const returnData = await axios.get('http://localhost:8080/orderList');
    return returnData.data;
};