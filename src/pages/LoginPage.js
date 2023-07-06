import React from "react";
import LoginButton from "../components/identity/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <p>
                Welcome to the Boilerplate! Please Log In to continue through to the application
            </p>
            <LoginButton buttonText="Log In" />
        </div>
    );
}

export default LoginPage;
