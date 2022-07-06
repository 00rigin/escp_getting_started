import {useEffect, useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {getOrderList, getUserOrderList} from "../api/apiOrder";
import {OrderRs} from "../interfaces/rs/orderRs";
import {orderListColumns, orderListRows} from "../interfaces/constants/Orders";
import {getRole} from "../utils/roleChecker";
import {AuthRole} from "../interfaces/enums/AuthRole";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";

const OrderList = () => {

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
        getRole(isToken.token)===AuthRole.admin?
            getOrderList()
                .then(res => {
                    getRowData(res);
                })
            : getUserOrderList()
                .then(res => {
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

export default OrderList;