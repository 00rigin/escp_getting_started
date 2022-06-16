import Button from "@mui/material/Button";
import Link from "next/link";
import RouteButton from "./utils/RouteButton";

const HomeButton = () => {
    return(RouteButton("/", "Back to home", true));
};

export default HomeButton;