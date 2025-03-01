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

            <OrderList/>
            <footer>
                <HomeButton/>
            </footer>


        </>

    );
};

export default OrderView;