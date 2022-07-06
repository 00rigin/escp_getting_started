import RouteButton from "./utils/RouteButton";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";

const OrderListButton = () => {

    const loginState = useSelector((state: RootState) => state.login);
    const isToken = useSelector((state:RootState)=>state.token);

    return (
        <>
            {/*{loginState.login && <RouteButton routePath="/order" routeExplain="Order List"/>}*/}
            {isToken.token && <RouteButton routePath="/order" routeExplain="Order List"/>}
        </>

    );
};

export default OrderListButton;