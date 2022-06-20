import MenuCard from "./MenuCard"
import {Grid} from "@mui/material";
import {useEffect, useState, useCallback, memo, useMemo, Key} from "react";
import {CoffeeRs} from "../interfaces/rs/coffeeRs";
import {getCoffeeList} from "../api/apiCoffee";

const CoffeeGrid = () => {

    const [coffeeData, setCoffeeData] = useState<any>([]);

    useMemo(() => {
        getCoffeeList()
            .then(res => {
                const coffeeDataArray = res.data;
                setCoffeeData(coffeeDataArray);
            });
    }, []);

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
