import axios from "axios"
import {CoffeeRs} from "../interfaces/rs/coffeeRs";
import {OrderRs} from "../interfaces/rs/orderRs";
import {getCookie} from "../utils/cookieUtil";
import {OrderListRq} from "../interfaces/rq/orderRq";

export const postOrder = (props:CoffeeRs) => {
    // const headers = getCookie('orderToken');

    // console.log(headers);

    return axios.post('http://localhost:8080/orders',
        {orderMenu: props.menuName},
        {headers:{
            withCredentials: true,
        }});
};


export const getOrderList = async ():Promise<OrderRs[]> => {
    const returnData = await axios.get('http://localhost:8080/orderList');
    return returnData.data;
};

export const getUserOrderList = async ():Promise<OrderRs[]> =>{
    const returnData = await axios.get('http://localhost:8080/orderListByUser');
    return returnData.data;
};
export const getWaitOrderList = async ():Promise<OrderRs[]> => {
    const returnData = await axios.get('http://localhost:8080/orderListOnWait');
    return returnData.data;
};

export const getOrderListByUser =  async (props: OrderListRq): Promise<OrderRs[]> => {
    console.log(props.userEmail);
    const inputData = {userEmail: props.userEmail};
    console.log(inputData);
    const returnData = await axios.get('http://localhost:8080/orderListByAdmin',
        {data:inputData}
    );
    return returnData.data;
};