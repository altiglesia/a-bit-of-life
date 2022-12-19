import React from "react";
import { Link } from 'react-router-dom';

function CableJunctionPoint ({ cableObj }) {
    const { name } = cableObj;

    return (
        <div>
            <Link to="/travelpath">
                <h5>{cableObj.name}</h5>
            </Link>
        </div>
    )
}

export default CableJunctionPoint;