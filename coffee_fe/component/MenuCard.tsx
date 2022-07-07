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
import {getRole} from "../utils/roleChecker";
import {AuthRole} from "../interfaces/enums/AuthRole";
import {sendDeleteMenu} from "../api/apiCRUD";
import {router} from "next/client";
import RouteButton from "./utils/RouteButton";
import {SettingRoutButton} from "./SettingRoutButton";

const MenuCard = (props:CoffeeRs) => {

    const isToken = useSelector((state:RootState)=>state.token);
    const userRole = isToken.token?getRole(isToken.token):null;

    const onClickOrder = () => {
        axios.defaults.headers.common["Authorization"] = isToken.token;
        postOrder(props)
            .catch((error)=>{
                console.log("ERROR @ order : "+error);
            });
    }

    const onClickDelete = () => {
        axios.defaults.headers.common["Authorization"] = isToken.token;
        sendDeleteMenu(props.menuName).then();
    }

    return(
        <>
            <Card className={styles.card}>
                <CardHeader title={props.menuName}/>
                <CardContent>
                    <div>{props.category}</div>
                    <div>{props.menuDescription}</div>
                    <Image src={require('../public/coffeeImage.png')} width={100} height={100}/>
                    <h3>{props.menuPrice}₩</h3>
                </CardContent>
                <CardActions className={styles.cardButton}>
                    <Button disabled = {!isToken.token} onClick={onClickOrder} variant="contained" color="primary"> 주문하기 </Button>
                    {userRole===AuthRole.admin&&
                        <>
                            <SettingRoutButton/>
                            <Button onClick={onClickDelete} variant="contained" color="primary"> 삭제 </Button>
                        </>
                    }

                </CardActions>
            </Card>
        </>
    );
};

export default memo(MenuCard);