import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
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
            <button id="logout" className="homeBtn" onClick={handleLogOut}>Logout</button>
            <button id="accessPathList" className="homeBtn" onClick={handleGoToMapList}>Paths</button>
            {/* <Link to="/quiz">
                Go to Quiz
            </Link> */}
        </div>
    )

}

export default Home