import MenuCard from "./MenuCard"
import {Grid} from "@mui/material";
import {useEffect, useState, useCallback, memo, useMemo, Key} from "react";
import {CoffeeRs} from "../interfaces/rs/coffeeRs";
import {getCoffeeList} from "../api/apiCoffee";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";
import {getRole} from "../utils/roleChecker";
import {AuthRole} from "../interfaces/enums/AuthRole";
import CreateMenuButton from "./CreateMenuButton";

const CoffeeGrid = () => {

    const [coffeeData, setCoffeeData] = useState<CoffeeRs[]>([]);
    const isToken = useSelector((state:RootState)=>state.token);
    const userRole = isToken.token?getRole(isToken.token):null;

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
                            <MenuCard menuId={item.menuId} menuName={item.menuName} category={item.category} menuDescription={item.menuDescription} menuPrice={item.menuPrice}/>
                        </Grid>
                    );
                })
            }
            {userRole===AuthRole.admin&&<CreateMenuButton/>}
        </Grid>
    );
};

export default CoffeeGrid;
