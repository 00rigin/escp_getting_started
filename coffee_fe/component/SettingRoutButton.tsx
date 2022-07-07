import RouteButton from "./utils/RouteButton";
import Button from "@mui/material/Button";
import styles from "../styles/routeButton.module.css";
import Link from "next/link";
import {CoffeeRs} from "../interfaces/rs/coffeeRs";

export const SettingRoutButton = () => {
    return(
        <>
            <Button variant="contained">
                <Link href="/updateMenu">
                    <div>수정</div>
                </Link>
            </Button>
        </>

    )
}