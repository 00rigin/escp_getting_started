import LoginPageButton from "../component/LoginPageButton";
import CoffeeGrid from "../component/CoffeeGrid";
import OrderListButton from "../component/OrderListButton";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";
import {getRole} from "../utils/roleChecker";
import {AuthRole} from "../interfaces/enums/AuthRole";
import OrderByUserButton from "../component/OrderByUserButton";
import OrderWithWaitButton from "../component/OrderWithWaitButton";
import {useEffect} from "react";

const CoffeeView = () => {
    const isToken = useSelector((state:RootState)=>state.token);
    const userRole = isToken.token?getRole(isToken.token):null;

    return (
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
                <LoginPageButton/>
            </header>
            <div>
                <CoffeeGrid/>
            </div>

            <footer>
                {userRole===AuthRole.admin?
                    <>
                    <OrderListButton/>
                    <OrderByUserButton/>
                    <OrderWithWaitButton/>
                    </>
                    :<OrderListButton/>
                }
            </footer>
        </>

    )
}

export default CoffeeView