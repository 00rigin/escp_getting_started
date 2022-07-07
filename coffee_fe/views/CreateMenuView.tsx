import SettingWindow from "../component/SettingWindow";
import {SettingType} from "../interfaces/enums/SettingType";
import HomeButton from "../component/HomeButton";

const CreateMenuView = () => {
    return(
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
                <h3>Create Menu Page</h3>
            </header>
            <SettingWindow setType={SettingType.CREATE}/>
            <footer>
                <HomeButton/>
            </footer>

        </>

    );

};
export default CreateMenuView;