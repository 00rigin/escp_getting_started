import jwt_decode from "jwt-decode";

export const getRole = (token:string) => {

    const decode = jwt_decode(token);
    return decode.userRole;

};