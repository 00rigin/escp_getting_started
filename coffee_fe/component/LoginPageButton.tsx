import RouteButton from "./utils/RouteButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";
import {getRole} from "../utils/roleChecker";
import Button from "@mui/material/Button";
import tokenReducer, {TOKEN_CLEAR, TokenDispatch} from "../reducers/tokenReducer";
import {LoginRs} from "../interfaces/rs/loginRs";
import LogoutButton from "./LogoutButton";

const LoginPageButton = () => {
    const isToken = useSelector((state:RootState)=>state.token);

    return(
        <>
            {isToken.token?
                <LogoutButton/>
                :<RouteButton routePath="/login" routeExplain="로그인"/>
            }

            <h3>{isToken.token?getRole(isToken.token):"로그인 하세요."}</h3>
        </>

    );
}
export default LoginPageButton;