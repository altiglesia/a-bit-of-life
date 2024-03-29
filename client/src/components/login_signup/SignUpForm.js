import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import user, { setUser } from "../store/user.js";
import { useNavigate, Link } from "react-router-dom";


function SignUpForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        quiz_results: ""
    })

    const navigateUserQuiz= () => {
        navigate("/quiz");
    }

    const navigateToStory = () => {
        navigate("/story");
    }

    function handleChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user: userData})
        })
        .then(res => {
            if (res.ok) {
                res.json().then((res) => {
                    localStorage.setItem("token", res.jwt)
                    dispatch(setUser(res.user));
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
        <>
            <form id="signUpForm" onSubmit={handleSubmit}>
                <label>sign up</label>
                <br/>
                <input
                    id="name" 
                    type="text" 
                    placeholder="what's your name?"
                    autoComplete="off"
                    name="username"
                    value={userData.username}
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input 
                    id="email"
                    type="text" 
                    placeholder="email address?"
                    autoComplete="off"
                    name="email"
                    value={userData.email}
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input
                    id="password"
                    type="password" 
                    placeholder="password"
                    autoComplete="off"
                    name="password"
                    value={userData.password}
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input
                    id="passwordConfirm" 
                    type="password" 
                    placeholder="password confirmation"
                    autoComplete="off"
                    name="password_confirmation"
                    value={userData.password_confirmation}
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input id="submitSignUp" type="submit" value="submit" />
            </form>
            <Link to="/login">
                <button className="switchLoginSignUp">Already a Bit? Login!</button>
            </Link>
        </>
    )
};

export default SignUpForm;