import styles from "../styles/MenuCard.module.css";
import axios from "axios";
import {memo} from "react";
import {useSelector} from "react-redux";
import {Card, CardActions, CardContent, CardHeader, IconButton} from "@mui/material";

import {RootState} from "../reducers/store/rootReducer";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Link from "next/link";

const CreateMenuButton = () => {


    const isToken = useSelector((state:RootState)=>state.token);

    const onClickCreate = () => {
        console.log("Click plus");

    }

    return(

        <Card className={styles.card}>
            <CardHeader title="메뉴 추가"/>
            <CardContent>
                <Link href="/updateMenu/createMenu">
                    <IconButton>
                        <AddBoxIcon fontSize="large"/>
                    </IconButton>
                </Link>

            </CardContent>
        </Card>

    );
};

export default memo(CreateMenuButton);