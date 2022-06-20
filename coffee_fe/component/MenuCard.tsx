import {Card, CardActions, CardContent, CardHeader} from "@mui/material";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";
import Image from "next/image";
import {CoffeeRs} from "../interfaces/rs/coffeeRs";
import {postOrder} from "../api/apiOrder";

const MenuCard = (props:CoffeeRs) => {

    const loginInfo = useSelector((state:RootState) => state.login);

    const onClickOrder = () => {
        postOrder(props);
    }

    return(
        <>
            <Card>
                <CardHeader title={props.menuName}/>
                <CardContent>
                    <div>{props.category}</div>
                    <Image src={require('../public/coffeeImage.png')} width={100} height={100}/>
                </CardContent>
                <CardActions>
                    <Button disabled = {loginInfo.login?false:true} onClick={onClickOrder} variant="contained" color="primary"> 주문하기 </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default MenuCard;