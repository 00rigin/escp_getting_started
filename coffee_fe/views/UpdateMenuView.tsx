import HomeButton from "../component/HomeButton";
import SettingWindow from "../component/SettingWindow";
import {SettingType} from "../interfaces/enums/SettingType";

const UpdateMenuView = () => {

    return(
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
                <h3>Update Menu Page</h3>
            </header>
            <SettingWindow setType={SettingType.UPDATE}/>

            <footer>
                <HomeButton/>
            </footer>

        </>

    );

};
export default UpdateMenuView;