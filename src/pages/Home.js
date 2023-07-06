import React from "react";
import LogoutButton from "../components/identity/LogoutButton";
import Profile from "../components/identity/Profile";

const Home = () => (
    <div>
        <p>
            Welcome! Give instructions on how to get started.
        </p>
        <Profile />
        <LogoutButton />
    </div>
);

export default Home;
