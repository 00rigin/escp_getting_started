import HomeButton from "../component/HomeButton";
import LoginButton from "../component/LoginButton";
import OrderList from "../component/OrderList";

const OrderView = () => {


    return(
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
                <LoginButton/>
            </header>
            <body>
                <OrderList/>
                <HomeButton/>
            </body>
        </>

    );
};

export default OrderView;