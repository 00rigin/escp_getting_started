import styles from "../styles/LoginButton.module.css";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_UPDATE, loginDispatch} from "../reducers/loginReducer";
import {RootState} from "../reducers/store/rootReducer";
import {LoginInfo} from "../interfaces/enums/enum";
import RouteButton from "./utils/RouteButton";

const LoginButton = () =>{

    // 디스패치 할때는 컴포에서 훅스로 디스패치 만들어서, 각 기능의 리듀서에 있는 디스패치로 넘겨서 사용함.
    const dispatch = useDispatch();

    const OnClickLoginButton = () => {
        loginDispatch(dispatch,LOGIN_UPDATE);
    }

    // 스테이트 사용할 때는 루트 스테이트에 있는 걸 가져오고, 그 안에서 타고타고 들어가야함.
    const loginState = useSelector((state:RootState) => state.login);

    return(
        <>
            <Button
                className={styles.loginButton}
                onClick={OnClickLoginButton}
                variant="contained">
                {loginState.login?LoginInfo.Logout:LoginInfo.LogIn}
            </Button>
        </>

    );
};

export default LoginButton;