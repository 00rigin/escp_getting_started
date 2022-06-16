import Button from "@mui/material/Button";
import Link from "next/link";
import RouteButton from "./utils/RouteButton";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";

const OrderListButton = () =>{

    const loginState = useSelector((state:RootState) => state.login);

    if(loginState.login === true){
        return(RouteButton("/order", "Order list", true));
    }
    else{
        return(RouteButton("/order", "Order list", false));
    }
};

export default OrderListButton;