import axios from "axios"
import {useEffect, useState} from "react";
import {orderListColumns, orderListRows} from "../interfaces/constants/Orders";
import {OrderRs} from "../interfaces/rs/orderRs";
import {getWaitOrderList} from "../api/apiOrder";
import {DataGrid} from "@mui/x-data-grid";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";

const WaitingOrderList = () => {
    const [rowData, setRowData] = useState<orderListRows[]>([]);
    const isToken = useSelector((state:RootState)=>state.token);

    const getRowData = (orderListData:OrderRs[]) => {
        const returnData = orderListData.map((item)=> {
            const newData:orderListRows = {id: item.orderId, OrderMenu: item.orderMenu, MenuCategory:item.menuCategory,
                OrderStatus: item.orderStatus, OrderDate: item.orderDate};
            return newData;
        })
        setRowData(returnData);
    }

    useEffect(()=>{
        axios.defaults.headers.common["Authorization"] = isToken.token;
        getWaitOrderList().then(res=>{
            getRowData(res);
        });
    },[])
    return(
        <>
            <div>
                <DataGrid columns={orderListColumns} rows={rowData}
                          autoHeight  />
            </div>
        </>
    );
};

export default WaitingOrderList;