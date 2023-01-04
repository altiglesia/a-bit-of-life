import path_map from "../../assets/path_map.png";

function TravelPath(){

    return (
        <>
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