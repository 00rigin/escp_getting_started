import LoginPageButton from "../component/LoginPageButton";
import CoffeeGrid from "../component/CoffeeGrid";
import OrderListButton from "../component/OrderListButton";
import LoginButton from "../component/LoginButton";

const CoffeeView = () => {

    return (
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
                {/*<LoginButton/>*/}
                <LoginPageButton/>
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