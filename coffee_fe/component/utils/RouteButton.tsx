import Button from "@mui/material/Button";
import Link from "next/link";

interface Props{
    routePath:string;
    routeExplain:string;
}


const RouteButton = (props:Props) => {

    return(
        <>
            <Button variant="contained">
                <Link href={props.routePath}>
                    <div>{props.routeExplain}</div>
                </Link>
            </Button>
        </>
    );

};

export default RouteButton;