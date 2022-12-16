import React, { useState } from "react";


function SignUpForm() {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    function handleChange(e) {
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <div>
            <form id="signUpForm">
                <label>sign up</label>
                <br/>
                <input
                    id="name" 
                    type="text" 
                    placeholder="what's your name?"
                    autoComplete="off"
                    name="username"
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input 
                    id="email"
                    type="text" 
                    placeholder="email address?"
                    autoComplete="off"
                    name="email"
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input
                    id="password"
                    type="password" 
                    placeholder="password"
                    autoComplete="off"
                    name="password"
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input
                    id="passwordConfirm" 
                    type="password" 
                    placeholder="password confirmation"
                    autoComplete="off"
                    name="passwordConfirm"
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input id="submitSignUp" type="submit" value="submit" />
            </form>
        </div>
    )
};

export default SignUpForm;