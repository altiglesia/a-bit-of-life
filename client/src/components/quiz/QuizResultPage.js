import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function QuizResultPage() {

    const accessBinaryValueResult = useSelector(state => state.rootReducer.user.profile.quiz_results)
    const binaryValueResult = accessBinaryValueResult.charAt(0).toUpperCase() + accessBinaryValueResult.slice(1);

    return (
        <>
            <h2 id="quizResultContainer">Congratulations! You are a {binaryValueResult}!</h2>
            <Link to ="/home">
                <button>home</button>
            </Link>
        </>
    )
};

export default QuizResultPage;