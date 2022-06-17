import MenuCard from "./MenuCard"
import {Grid} from "@mui/material";
import {useEffect, useState, useCallback, memo, useMemo, Key} from "react";

const CoffeeGrid = () => {

    const [coffeeData, setCoffeeData] = useState<any>([]);
    const axios = require('axios');

    useMemo(() => {
        axios({
            url: 'http://localhost:8080/menus',
            method: 'get'
        }).then(function (response: any) {
            // console.log(response.data);
            setCoffeeData(response.data);
        });
    }, []);

    console.log(coffeeData);
    return(
        <Grid container spacing={3}>
            {
                coffeeData.map((item: { menuId: number; menuName: string; category: string; })=>{
                    return (
                        <Grid key = {item.menuId} item xs={4}>
                            <MenuCard  menuId={item.menuId} menuName={item.menuName} category={item.category}/>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
};

export default CoffeeGrid;
