import {useEffect, useState} from "react";

import {DataGrid} from "@mui/x-data-grid";

import {getOrderList} from "../api/apiOrder";
import {OrderRs} from "../interfaces/rs/orderRs";
import {orderListColumns, orderListRows} from "../interfaces/constants/Orders";

const OrderList = () => {


    const [rowData, setRowData] = useState<orderListRows[]>([]);

    const getRowData = (orderListData:OrderRs[]) => {
        // console.log(orderListData);
        const returnData = orderListData.map((item)=> {

            // // console.log(item);
            const coffeeData = {};
            const newData:orderListRows = {id: item.orderID, menuName: item.menuID.menuName, category:item.menuID.category,
                orderStatus: item.orderStatus, orderDate: item.orderDate};

            return newData;
        })
        setRowData(returnData);
        // console.log(returnData);
        // return returnData;
    }

    useEffect(()=>{
        console.log("efkjehkfdsa");
        getOrderList()
            .then(res => {
                getRowData(res);
            })

    },[])





    return(
        <>
            <div style={{height: '400px', width: '100%'}}>
                <DataGrid columns={orderListColumns} rows={rowData}  autoPageSize />
            </div>
        </>
    );
};

export default OrderList;