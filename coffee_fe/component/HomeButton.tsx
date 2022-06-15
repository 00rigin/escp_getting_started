import Button from "@mui/material/Button";
import Link from "next/link";

const HomeButton = () => {


    return(
        <>
            <Button variant="contained">
                <Link href={"/"}>
                    <a>Come back home</a>
                </Link>
            </Button>
        </>



    );
};

export default HomeButton;