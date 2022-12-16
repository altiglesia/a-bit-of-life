import React, { useEffect, useState } from "react";
import CableJunctionPoint from "./CableJunctionPoint";

function SubmarineCables() {
    const [cablesList, setCablesList] = useState([])
    
    useEffect(() => {
        fetch('/submarine_cables')
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {
                    setCablesList(data);
                })} else {
                    return res.text().then((text) => Promise.reject(text))
                }
            })
            .catch((err) => {
                console.error(err);
            })
        },[])
        
    const mappedOutCablesList = cablesList.map((cableObj) => (
        <CableJunctionPoint 
            key={cableObj.id}
            cableObj={cableObj}
        />
    ))

    return (
        <div>
            <ul>{mappedOutCablesList}</ul>
        </div>
    )
}

export default SubmarineCables;