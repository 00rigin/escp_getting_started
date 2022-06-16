import Button from "@mui/material/Button";
import Link from "next/link";

const RouteButton = (routePath:string, routeExplain:string, authority:boolean) => {

    if(authority == true){
        return(
            <>
                <Button variant="contained">
                    <Link href={routePath}>
                        <a>{routeExplain}</a>
                    </Link>
                </Button>
            </>
        );
    }
    else{
        return(
            <>
                <Button variant="contained">
                    <a>{routeExplain}</a>
                </Button>
            </>
        );
    }

};

export default RouteButton;