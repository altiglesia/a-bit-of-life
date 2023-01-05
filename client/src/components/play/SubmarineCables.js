import React, { useEffect, useState } from "react";
import CableJunctionPoint from "./CableJunctionPoint";
import { Link } from 'react-router-dom';

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
        <>
        <div id="submarineCableListTitle">
            <h3>explore the submarine cables</h3>
        </div>
            <div id="submarineCableListContainer">
                <ul>{mappedOutCablesList}</ul>
            </div>
            <Link to ="/home">
                <button className="goToMainMenu">main menu</button>
            </Link>
        </>
    )
}

export default SubmarineCables;