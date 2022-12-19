import React from "react";
import { Link } from 'react-router-dom';

function CableJunctionPoint ({ cableObj }) {
    const { name } = cableObj;

    function handleLinkClick() {
        console.log('clicked!')
    }

    return (
        <div>
            <Link onClick={handleLinkClick} to="/travelpath">
                <h5>{cableObj.name}</h5>
            </Link>
        </div>
    )
}

export default CableJunctionPoint;