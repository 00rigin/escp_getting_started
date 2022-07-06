import jwt_decode from "jwt-decode";
import {AuthRole} from "../interfaces/enums/AuthRole";

export const getRole = (token:string):AuthRole => {
    const decode = jwt_decode(token);
    return decode.userRole==='admin'?AuthRole.admin:AuthRole.user;

};