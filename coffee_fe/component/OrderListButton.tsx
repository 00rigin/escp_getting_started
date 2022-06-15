import Button from "@mui/material/Button";
import Link from "next/link";

const OrderListButton = () =>{
    return(
        <>
            <Button variant="contained">
                <Link href={"/order"}>
                    <a>Order List</a>
                </Link>
            </Button>
        </>
    );
};

export default OrderListButton;