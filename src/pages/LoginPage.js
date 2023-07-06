import React from "react";
import LoginButton from "../components/identity/LoginButton";

const LoginPage = () => {
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
