import React from "react";
import LoginButton from "../components/identity/LoginButton";
import LogoutButton from "../components/identity/LogoutButton";

const LoginPage = () => (
    <div>
        <p>
            Success! Please verify your email before before clicking "Continue" ...
        </p>
        <LoginButton buttonText="Continue" />
        <LogoutButton />
    </div>
);

export default LoginPage;
