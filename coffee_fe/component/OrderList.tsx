import {useEffect, useState} from "react";

import {DataGrid} from "@mui/x-data-grid";

import {getOrderList} from "../api/apiOrder";
import {OrderRs} from "../interfaces/rs/orderRs";
import {orderListColumns, orderListRows} from "../interfaces/constants/Orders";

const OrderList = () => {

    const [rowData, setRowData] = useState<orderListRows[]>([]);

    const getRowData = (orderListData:OrderRs[]) => {
        const returnData = orderListData.map((item)=> {
            const coffeeData = {};
            const newData:orderListRows = {id: item.orderID, menuName: item.menuID.menuName, category:item.menuID.category,
                orderStatus: item.orderStatus, orderDate: item.orderDate};

            return newData;
        })
        setRowData(returnData);
    }

    useEffect(()=>{
        getOrderList()
            .then(res => {
                getRowData(res);
            })
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