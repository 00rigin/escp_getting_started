import Table from "./utils/Table"
import {DataGrid} from "@mui/x-data-grid";
import {getOrderList} from "../api/apiOrder";
import {getCoffeeList} from "../api/apiCoffee";
import {useEffect, useMemo, useState} from "react";
import {OrderRs} from "../interfaces/rs/orderRs";


const columns = [
    {field: 'id', headerName:"ID", width:150},
    {field: 'menu', headerName:"메뉴명", width:150},
    {field: 'category', headerName:"카테고리", width:150},
    {field: 'orderState', headerName:"주문 상태", width:150},
    {field: 'orderTime', headerName:"주문 시간", width:150},

]

const rows = [
    {id: 1, menu:"아이스아메리카노", category:"커피"},
    {id: 2, menu:"핫아메리카노", category:"커피"},
    {id: 3, menu:"석류콤부차", category:"차"},
]



const OrderList = () => {

    const [orderListDataState, setOrderListDataState] = useState<OrderRs[]>([]);

    useMemo(()=>{
        getOrderList()
            .then(res => {
                const orderListData = res.data;
                setOrderListDataState(orderListData);
                console.log(orderListData);
            });
    },[])


    return(
        <>
            <div style={{height: 400, width: '100%'}}>
                <DataGrid rows={rows} columns={columns} autoPageSize={true}/>
            </div>
        </>
    );
};

export default OrderList;