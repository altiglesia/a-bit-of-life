import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// import certificateImage from '../../assets/certificate.jpg';

function QuizResultPage() {

    const accessBinaryValueResult = useSelector(state => state.rootReducer.user.profile.quiz_results)
    const binaryValueResult = accessBinaryValueResult.charAt(0).toUpperCase() + accessBinaryValueResult.slice(1);

    const certificateImage = require('../../assets/certificate.jpg')

    return (
        <div id="quizResultContainer" 
            style={{ 
                padding: 0,
                backgroundImage: `url(${certificateImage})`, 
                height: "450px",
                width: "600px", 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat" 
                }}>
            <h1 id="binaryQuizResult">You are a {binaryValueResult}!</h1>
            <Link to ="/home">
                <button>what now?</button>
            </Link>
        </div>
    )
};

export default QuizResultPage;