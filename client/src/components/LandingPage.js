import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LandingPage() {
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
            <h1 id="WelcomePage">welcome to a bit of life</h1>
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