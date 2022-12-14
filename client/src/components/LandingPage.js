import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { clearUser } from "./store/user.js";
import { RandomReveal } from "react-random-reveal";

function LandingPage() {

    useEffect(() => {
        clearUser()
        localStorage.clear()
    }, [])
    
    return (
        <div id="enterPagesContainer">
            <div>
                <h1 id="WelcomePage">
                    <RandomReveal
                        isPlaying
                        duration={4}
                        revealDuration={1.6}
                        characterSet="01"
                        characters="a bit of life"
                        onComplete={() => ({ shouldRepeat: true, delay: 4 })}
                    />
                </h1>
            </div>
            <div>
                <Link to="/signup">
                    <button 
                        id="signUpFromLanding"
                        className="Enter">
                            signup
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/login">
                    <button 
                        id="logInFromLanding" 
                        className="Enter">
                            login
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;