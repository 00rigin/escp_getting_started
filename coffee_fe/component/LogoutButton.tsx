import Button from "@mui/material/Button";
import axios from "axios";
import {useDispatch} from "react-redux";
import {LoginRs} from "../interfaces/rs/loginRs";
import {TOKEN_CLEAR, TokenDispatch} from "../reducers/tokenReducer";
import styles from "../styles/routeButton.module.css";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const onClickLogoutButton = () => {
        const clearData:LoginRs = {token:''};
        TokenDispatch(dispatch, TOKEN_CLEAR, {token:clearData});
        axios.defaults.headers.common["Authorization"] = '';
    }
    return(
        <Button className={styles.routeButton}
        onClick={onClickLogoutButton}
        variant="contained">로그아웃</Button>
    );
};

export default LogoutButton;