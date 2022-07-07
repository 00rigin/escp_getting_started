import LogoutButton from "../component/LogoutButton";
import HomeButton from "../component/HomeButton";
import {TextField} from "@mui/material";
import axios from "axios"
import {useCallback, useState} from "react";
import Button from "@mui/material/Button";
import {getOrderListByUser, getWaitOrderList} from "../api/apiOrder";
import {OrderListRq} from "../interfaces/rq/orderRq";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";
import {orderListColumns, orderListRows} from "../interfaces/constants/Orders";
import {OrderRs} from "../interfaces/rs/orderRs";
import {DataGrid} from "@mui/x-data-grid";

const OrderByUserView = () => {

    const [inputData, setInputData] = useState({emailAddress : ''});
    const isToken = useSelector((state:RootState)=>state.token);
    const [rowData, setRowData] = useState<orderListRows[]>([]);

    const onChangeTextField = (event: { target: { name: string; value: string; }; }) => {
        const {name, value} = event.target;
        setInputData({...inputData , [name]: value });
    };

    const setRowDataForm = (orderListData:OrderRs[]) => {
        const returnData = orderListData.map((item)=> {
            const newData:orderListRows = {id: item.orderId, OrderMenu: item.orderMenu, MenuCategory:item.menuCategory,
                OrderStatus: item.orderStatus, OrderDate: item.orderDate};
            return newData;
        })
        setRowData(returnData);
    };

    const onClickSearch =() => {
        const searchRq:OrderListRq = {userEmail: inputData.emailAddress};
        axios.defaults.headers.common["Authorization"] = isToken.token;
        getOrderListByUser(searchRq).then(res=>{
            setRowDataForm(res);
        });
    };

    return(
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
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

            <DataGrid columns={orderListColumns} rows={rowData}
                      autoHeight  />
            <footer>
                <HomeButton/>
            </footer>


        </>

    );


};

export default OrderByUserView;