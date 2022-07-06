import LogoutButton from "../component/LogoutButton";
import OrderList from "../component/OrderList";
import HomeButton from "../component/HomeButton";
import {TextField} from "@mui/material";
import axios from "axios"
import {string} from "prop-types";
import {useCallback, useState} from "react";
import Button from "@mui/material/Button";
import {getOrderListByUser, getWaitOrderList} from "../api/apiOrder";
import {OrderListRq} from "../interfaces/rq/orderRq";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";

const OrderByUserView = () => {

    const [inputData, setInputData] = useState({emailAddress : ''});
    const isToken = useSelector((state:RootState)=>state.token);

    const onChangeTextField = (event: { target: { name: string; value: string; }; }) => {
        const {name, value} = event.target;
        setInputData({...inputData , [name]: value });
    };

    const onClickSearch =() => {
        const searchRq:OrderListRq = {userEmail: inputData.emailAddress};
        // axios.defaults.headers.common["Authorization"] = isToken.token;
        getOrderListByUser(searchRq).then(res=>{
            console.log(res);
        });
        // getWaitOrderList().then(res=>{
        //     console.log(res);
        // })
      // console.log(inputData);
    };

    return(
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
                <LogoutButton/>
            </header>
            <div>
                <div>사용자의 주문 내역 검색</div>
                <TextField
                    id="emailAddress"
                    name="emailAddress"
                    label="email"
                    variant="outlined"
                    autoFocus
                    onChange={onChangeTextField}
                />
                <Button variant="contained" onClick={onClickSearch}>검색</Button>
            </div>


            <OrderList/>
            <footer>
                <HomeButton/>
            </footer>


        </>

    );


};

export default OrderByUserView;