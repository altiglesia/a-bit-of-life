import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setUser } from "../store/user.js";
import { useNavigate } from "react-router-dom";

function CableJunctionPoint ({ cableObj }) {
    const { name } = cableObj;
    const username = useSelector(state => state.rootReducer.user.profile.username);
    const user = useSelector(state => state.rootReducer.user.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const profile = useSelector(state => console.log(state.rootReducer.user.profile))

    // on click of the link, then send post request

    const navigateToPath = () => {
        navigate("/travelpath");
    }

    function sendCurrentCablePath() {
        console.log(name)
        fetch("/api/v1/profile", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username,
                    current_cable_path: name
                }
            })
        })
        .then((res) => {
            if (res.ok) {
              res.json().then((res) => {
               dispatch(setUser({ ...user, current_cable_path: res.current_cable_path}))
              })
            navigateToPath()
            } else if (res.status === "401") {
              throw new Error("unauthorized request");
            }
        })
    }

    return (
        <div>
            <Link to="/travelpath">
                <h5 onClick={sendCurrentCablePath} value={cableObj.name}>{cableObj.name}</h5>
            </Link>
        </div>
    )
}

export default CableJunctionPoint;