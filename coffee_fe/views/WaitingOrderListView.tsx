import LogoutButton from "../component/LogoutButton";
import HomeButton from "../component/HomeButton";
import WaitingOrderList from "../component/WaitingOrderList";

const WaitingOrderListView = () => {

    return(
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
            </header>

            <WaitingOrderList/>
            <footer>
                <HomeButton/>
            </footer>


        </>

    );


}
export default WaitingOrderListView;