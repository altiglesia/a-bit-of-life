import React, { useState } from "react";


function SignUpForm() {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })

    function handleChange(e) {
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        
    }

    return (
        <div>
            <form>
                <label>Sign up</label>
                <br/>
                <input 
                    type="text" 
                    label="what's your name?"
                    autoComplete="off"
                    name="username"
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input 
                    type="text" 
                    label="email"
                    autoComplete="off"
                    name="email"
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input 
                    type="password" 
                    label="password"
                    autoComplete="off"
                    name="password"
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input 
                    type="password" 
                    label="passwordConfirm"
                    autoComplete="off"
                    name="passwordConfirm"
                    onChange={(e) => handleChange(e)}
                />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default SignUpForm;