import TravelPath from "./TravelPath";
import './InGameMap.css'

function InGameMap({ x }) {

    return (
        <div id="InGameMap"
            style={{
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: -x,

            }}
        >

            <TravelPath />
        </div>
    )
}

export default InGameMap;