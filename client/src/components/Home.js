import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
// if user is Logged in, show everything on home page
    const navigate = useNavigate();
    
    const goBackToLanding = () => {
        navigate("/");
    }

    const goToCableList = () => {
        navigate("/cables");
    }

    function handleLogOut(){
        localStorage.clear();
        goBackToLanding();
    }

    function handleGoToMapList() {
        goToCableList();
    }

    return (
        <div>
            <h1>welcome back</h1>
            <button id="logout" onClick={handleLogOut}>Logout</button>
            <button onClick={handleGoToMapList}>Paths</button>
            <Link to="/quiz">
                Go to Quiz
            </Link>
        </div>
    )
}

export default Home