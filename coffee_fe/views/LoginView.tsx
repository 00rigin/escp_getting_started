import HomeButton from "../component/HomeButton";
import LoginButton from "../component/LoginButton";
import LoginPageButton from "../component/LoginPageButton";
import LoginWindow from "../component/LoginWindow";


const LoginView = () => {

    return(
        <>
            <header>
                <h3>
                    Midas Cafe
                </h3>
                <h3>Login Page</h3>
            </header>
            <LoginWindow/>

            <footer>
                <HomeButton/>
            </footer>

        </>

    );
};

export default LoginView;