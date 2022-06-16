import { withStyles } from '@mui/styles';
import {Grid3x3} from "@mui/icons-material";
import MenuCard from "./MenuCard"
import {Grid} from "@mui/material";

const CoffeeGrid = () => {

    return(
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <MenuCard/>
            </Grid>
            <Grid item xs={4}>
                <MenuCard/>
            </Grid>
            <Grid item xs={4}>
                <MenuCard/>
            </Grid>
            <Grid item xs={4}>
                <MenuCard/>
            </Grid>
            <Grid item xs={4}>
                <MenuCard/>
            </Grid>
            <Grid item xs={4}>
                <MenuCard/>
            </Grid>
        </Grid>
    );
};

export default CoffeeGrid;
