import {DialogContent, TextField} from "@mui/material";
import axios from "axios";
import {useState} from "react";
import {loginType} from "../interfaces/constants/LoginForm";
import Button from "@mui/material/Button";
import {getLogin} from "../api/apiLogin";
import {LoginRs} from "../interfaces/rs/loginRs";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";


import {TOKEN_UPDATE, TokenDispatch} from "../reducers/tokenReducer";


const LoginWindow = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    type LoginType = typeof loginType[keyof typeof loginType];


    const [formContent, setFormContent] = useState({
        name: '',
        email: '',
    });
    const [loginInfo, setLoginInfo] = useState({
        token:'',
    })

    const formChange = (type: LoginType, text: string) => {
        const newContent = { ...formContent };
        newContent[type] = text;

        setFormContent(newContent);

    };


    const onClickOrder = () => {
        getLogin(formContent).then((res:LoginRs)=>{
            console.log("res : "+res);
            // axios.defaults.headers.common['Authorization']='Bearer '+res;
            // setLoginInfo(res);
            TokenDispatch(dispatch, TOKEN_UPDATE, {token: res});
            router.push("/");
        });
    };

    return(
        <>
            <DialogContent>
                <div>NAME</div>
                <TextField
                    size="small"
                    sx={{ width: '500px' }}
                    onChange={e => formChange(loginType.name, e.target.value)}
                />
                <div>EMAIL</div>
                <TextField
                    size="small"
                    sx={{ width: '500px' }}
                    onChange={e => formChange(loginType.email, e.target.value)}
                />
            </DialogContent>
            <Button onClick={onClickOrder} variant="contained" color="primary"> 로그인 </Button>
        </>

    );
};

export default LoginWindow;