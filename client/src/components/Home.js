import React from "react";
import { useNavigate } from "react-router-dom";

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
        <div id="mainMenu">
            <h1>main menu</h1>
            <button id="logout" className="homeBtn" onClick={handleLogOut}>logout</button>
            <button id="accessPathList" className="homeBtn" onClick={handleGoToMapList}>paths</button>
        </div>
    )

}

export default Home