import axios from "axios";
import {LoginRq} from "../interfaces/rq/loginRq";
import {LoginRs} from "../interfaces/rs/loginRs";


export const getLogin = async (props:LoginRq):Promise<LoginRs> => {
    const returnData = await axios.post('http://localhost:8080/login', {userName: props.name, userEmail: props.email});
    return returnData.data;
};
