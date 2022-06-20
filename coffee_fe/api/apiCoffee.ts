import axios from "axios";
export const getCoffeeList = () => {
    return axios.get('http://localhost:8080/menus');
};
