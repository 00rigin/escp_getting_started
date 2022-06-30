import RouteButton from "./utils/RouteButton";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store/rootReducer";
import {getRole} from "./utils/roleChecker";

const LoginPageButton = () => {
    const isToken = useSelector((state:RootState)=>state.token);

    return(
        <>
            <RouteButton routePath="/login" routeExplain={isToken.token?"로그아웃":"로그인"}/>
            <h3>{isToken.token?getRole(isToken.token):"로그인 하세요."}</h3>
        </>

    );
}

export default LoginPageButton;