import HomeButton from "../component/HomeButton";

import OrderList from "../component/OrderList";
import LogoutButton from "../component/LogoutButton";

const OrderView = () => {


    return(
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
            </header>
            <OrderList/>
            <footer>
                <HomeButton/>
            </footer>


        </>

    );
};

export default OrderView;