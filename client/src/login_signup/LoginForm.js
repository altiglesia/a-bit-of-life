import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setUser } from "../store/user.js";
import { useNavigate } from "react-router-dom";

function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const navigateUserHome = () => {
        navigate("/home");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: { 
                    username, 
                    password 
                }
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then((res) => localStorage.setItem("token", res.jwt))
                // console.table(res.json());
                dispatch(setUser);
                navigateUserHome();
            } else {
                return res.text().then((text) => Promise.reject(text))
            }
        })
        .catch((err) => {
          console.error(err);
        });
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <br/>
                <input
                    type="text"
                    label="username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input
                    type="password"
                    label="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default LoginForm;