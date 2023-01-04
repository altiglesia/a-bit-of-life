import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearUser } from "./store/user.js";

function LandingPage() {

    useEffect(() => {
        clearUser()
        localStorage.clear()
    }, [])

    const navigate = useNavigate();
    
    const goToLogInPage = () => {
        navigate("/login");
    }

    const goToSignUpPage = () => {
        navigate("/signup");
    }

    function handleLoginClick() {
        goToLogInPage();
    }

    function handleSignUpClick() {
        goToSignUpPage();
    }
    
    return (
        <div>
            <h1 id="WelcomePage">a bit of life</h1>
            <button 
                id="signUpFromLanding"
                className="Enter"
                onClick={handleSignUpClick}>
                    signup
            </button>
            <button 
                id="logInFromLanding" 
                className="Enter" 
                onClick={handleLoginClick}>
                    login
            </button>
        </div>
    )
}

export default LandingPage;