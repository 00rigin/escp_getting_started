import LoginButton from "../component/LoginButton";
import CoffeeGrid from "../component/CoffeeGrid";
import OrderListButton from "../component/OrderListButton";

const CoffeeView = () => {

    return (
        <>
            <h3>
                Midas Cafe
            </h3>
            <div>
                <LoginButton/>
                <CoffeeGrid/>
                <OrderListButton/>
            </div>
        </>

    )
}

export default CoffeeView