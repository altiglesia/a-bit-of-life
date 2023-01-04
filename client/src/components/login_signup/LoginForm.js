import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../store/user.js";
import { useNavigate, Link } from "react-router-dom";

function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateUserHome = () => {
        navigate("/home");
    }

    const navigateToStory = () => {
        navigate("/story");
    }

    const quizResult = useSelector(state => state.rootReducer.user.profile.quiz_results)

    const checkQuizResults = () => {
        debugger;
        console.log(quizResult)
        if (quizResult === "zero") {
        console.log(quizResult)
        navigate("/home")
        } else if (quizResult === "one") {
        console.log(quizResult)
        navigate("/home")
        } else {
        console.log(quizResult)
        navigate("/quiz")
        }
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
                res.json().then((res) => {
                    localStorage.setItem("token", res.jwt)
                    dispatch(setUser(res.user));
                    // checkQuizResults();
                })
                navigateToStory();
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
            <form id="loginForm" onSubmit={handleSubmit}>
                <label>login</label>
                <br/>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <input type="submit" value="submit" />
            </form>
            <Link to="/signup">
                <button>New Here? Sign Up!</button>
            </Link>
        </div>
    )
}

export default LoginForm;