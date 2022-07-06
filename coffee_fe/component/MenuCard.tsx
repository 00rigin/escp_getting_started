import styles from "../styles/MenuCard.module.css";
import axios from "axios";
import {memo} from "react";
import {useSelector} from "react-redux";
import {Card, CardActions, CardContent, CardHeader} from "@mui/material";
import Button from "@mui/material/Button";

import {RootState} from "../reducers/store/rootReducer";
import Image from "next/image";
import {CoffeeRs} from "../interfaces/rs/coffeeRs";
import {postOrder} from "../api/apiOrder";
import {setCookie} from "../utils/cookieUtil";

const MenuCard = (props:CoffeeRs) => {

    const loginInfo = useSelector((state:RootState) => state.login);
    const isToken = useSelector((state:RootState)=>state.token);

    const onClickOrder = () => {
        // setCookie('orderToken', isToken.token);
        console.log("Chek token : " + isToken.token);
        axios.defaults.headers.common["Authorization"] = isToken.token;

        postOrder(props)
            .catch((error)=>{
                console.log("ERROR @ order : "+error);
            });
    }

    return(
        <>
            <Card className={styles.card}>
                <CardHeader title={props.menuName}/>
                <CardContent>
                    <div>{props.category}</div>
                    <Image src={require('../public/coffeeImage.png')} width={100} height={100}/>
                </CardContent>
                <CardActions className={styles.cardButton}>
                    <Button disabled = {isToken.token?false:true} onClick={onClickOrder} variant="contained" color="primary"> 주문하기 </Button>
                    {/*<Button disabled = {loginInfo.login?false:true} onClick={onClickOrder} variant="contained" color="primary"> 주문하기 </Button>*/}
                </CardActions>
            </Card>
        </>
    );
};

export default memo(MenuCard);