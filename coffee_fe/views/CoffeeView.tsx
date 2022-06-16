import LoginButton from "../component/LoginButton";
import CoffeeGrid from "../component/CoffeeGrid";
import OrderListButton from "../component/OrderListButton";

const CoffeeView = () => {

    return (
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
                <LoginButton/>
            </header>
            <div>
                <CoffeeGrid/>
            </div>

            <footer>
                <OrderListButton/>
            </footer>
        </>

    )
}

export default CoffeeView