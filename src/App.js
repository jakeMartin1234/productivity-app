import React, { useState, useEffect } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './pages/LoginPage';
import EmailNotVerified from "./pages/EmailNotVerified";
import Home from "./pages/Home";

function App() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="App">
                <div className="App-header">
                    <p>
                        Loading ...
                    </p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="App">
                <div className="App-header">
                    <LoginPage />
                </div>
            </div>

        );
    } else {
        if (!user.email_verified) {
            return (
                <div className="App">
                    <div className="App-header">
                        <EmailNotVerified />
                    </div>
                </div>

            );
        } else {
            return (
                <div className="App">
                    <div className="App-header">
                        <Home />
                    </div>
                </div>
            );
        }
    }
}

export default App;
