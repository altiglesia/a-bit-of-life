import React from "react";
import LoginForm from "./LoginForm";

function LoginPage() {

    // const quizResult = useSelector(state => state.rootReducer.user.profile.quiz_results)

    // const checkQuizResults = () => {
    //     // debugger;
    //     console.log(quizResult)
    //     if (quizResult === "zero") {
    //     console.log(quizResult)
    //     navigate("/home")
    //     } else if (quizResult === "one") {
    //     console.log(quizResult)
    //     navigate("/home")
    //     } else {
    //     console.log(quizResult)
    //     navigate("/quiz")
    //     }
    // }

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default LoginPage;