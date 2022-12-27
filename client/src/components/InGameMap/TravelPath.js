import path_map from "../../assets/path_map.png";
import { useNavigate } from "react-router-dom";

function TravelPath(){

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/home")
    }

    function handleHomeClick() {
        goHome()
    }

    return (
        <>
            <button onClick={handleHomeClick}>Home</button>
            <div id="travelPath"
                    style={{
                        boxSizing: "border-box",
                        backgroundImage: `url(${path_map})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "0px 0px",
                        display: "inline-block",
                        width: "640px",
                        height: "320px"
                    }}
            />
        </>
    )
}

export default TravelPath;