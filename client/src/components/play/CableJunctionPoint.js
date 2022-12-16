import React from "react";

function CableJunctionPoint ({ cableObj }) {
    const { name } = cableObj;

    

    return (
        <div>
            <h5>{cableObj.name}</h5>
        </div>
    )
}

export default CableJunctionPoint;