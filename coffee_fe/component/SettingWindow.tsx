import axios from "axios";
import {SettingType} from "../interfaces/enums/SettingType";
import {DialogContent, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {useState} from "react";
import {SettingForm} from "../interfaces/constants/SettingForm";
import {createMenu, updateMenu} from "../api/apiCRUD";
import {SettingTypeInterface} from "../interfaces/constants/SettingTypeInterface";
import {RootState} from "../reducers/store/rootReducer";

const SettingWindow = (setType: SettingTypeInterface) => {

    const isToken = useSelector((state:RootState)=>state.token);
    type SettingForm = typeof SettingForm[keyof typeof SettingForm];

    const [formContent, setFormContent] = useState({
        menuId: '',
        menuName: '',
        category: '',
        menuPrice: '',
        menuDescription: '',
    });

    const formChange = (type: SettingForm, text: string) => {
        const newContent = { ...formContent };
        newContent[type] = text;
        setFormContent(newContent);
    };

    const onClickSettingComplete = () => {
        axios.defaults.headers.common["Authorization"] = isToken.token;
        setType.setType === SettingType.UPDATE?
            updateMenu(formContent).then()
        : createMenu(formContent).then();
    };


    return(
        <>
            <DialogContent>
                {setType.setType === SettingType.UPDATE&&
                    <>
                        <div>Menu Id</div>
                        <TextField
                            size="small"
                            sx={{ width: '500px' }}
                            onChange={e => formChange(SettingForm.menuId, e.target.value)}
                        />
                    </>
                }

                <div>Menu name</div>
                <TextField
                    size="small"
                    sx={{ width: '500px' }}
                    onChange={e => formChange(SettingForm.menuName, e.target.value)}
                />
                <div>Category</div>
                <TextField
                    size="small"
                    sx={{ width: '500px' }}
                    onChange={e => formChange(SettingForm.category, e.target.value)}
                />
                <div>Menu price</div>
                <TextField
                    size="small"
                    sx={{ width: '500px' }}
                    onChange={e => formChange(SettingForm.menuPrice, e.target.value)}
                />
                <div>Menu description</div>
                <TextField
                    size="small"
                    sx={{ width: '500px' }}
                    onChange={e => formChange(SettingForm.menuDescription, e.target.value)}
                />
            </DialogContent>
            <Button onClick={onClickSettingComplete} variant="contained" color="primary"> 완료 </Button>
        </>

    );
};
export default SettingWindow;