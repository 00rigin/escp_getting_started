import MenuCard from "./MenuCard"
import {Grid} from "@mui/material";
import {useEffect, useState, useCallback, memo, useMemo, Key} from "react";
import {CoffeeRs} from "../interfaces/rs/coffeeRs";
import {getCoffeeList} from "../api/apiCoffee";

const CoffeeGrid = () => {

    const [coffeeData, setCoffeeData] = useState<CoffeeRs[]>([]);

    useMemo(() => {
        getCoffeeList()
            .then(res => {
                setCoffeeData(res);
            })
            .catch((error)=>{
                console.log("ERROR @ coffeeGrid: "+ error);
            });
    }, []);

    return(
        <Grid container spacing={3}>
            {
                coffeeData.map((item:CoffeeRs)=>{
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
