import axios from "axios";
import {CoffeeRs} from "../interfaces/rs/coffeeRs";


export const getCoffeeList = async ():Promise<CoffeeRs[]> => {
    const returnData = await axios.get('http://localhost:8080/menus');
    return returnData.data;
};
