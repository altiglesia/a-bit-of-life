import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizItem from "./QuizItem";
import { useSelector } from "react-redux";

function Quiz() {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);

    const navigate = useNavigate();
    const username = useSelector(state => state.rootReducer.user.profile.username)

    const navigateUserHome = () => {
        navigate("/home");
    }

    useEffect(() => {
        fetch('/quiz_questions')
        .then((res) => {
            if (res.ok) {
                res.json().then((data) => setQuizQuestions(data))
            } else {
                return res.text().then((text) => Promise.reject(text))
            }
        })
    }, [])

    function showNextQuestion() {
        if (questionIndex < 9) {
            setQuestionIndex(i => i + 1)
        } else {
            findValueOfCharacter();
            navigateUserHome();
        }
    }
    
    function findValueOfCharacter() {
        let binaryNumberOfCharacter;
        if (Math.random() < 0.5) {
            binaryNumberOfCharacter = "zero"
            console.log(binaryNumberOfCharacter)
            updateQuizResult(binaryNumberOfCharacter)
        } else if (Math.random() > 0.5) {
            // console.log(Math.random())
            binaryNumberOfCharacter = "one"
            updateQuizResult(binaryNumberOfCharacter)
            // console.log(binaryNumberOfCharacter)
        }
        console.log(binaryNumberOfCharacter)
        return binaryNumberOfCharacter;
    }

    function updateQuizResult(binaryNumberOfCharacter) {
        fetch("/api/v1/profile", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username,
                    quiz_results: binaryNumberOfCharacter
                }
            })
        })
    }

    const questionsAndAnswers = quizQuestions.map((quizQuestion) => (
        <QuizItem 
            key={quizQuestion.id}
            quizQuestion={quizQuestion}
            showNextQuestion={showNextQuestion}
        />
    ))

    return (
        <div id="quizPage" >
            {/* <h5>You've been turned into a Bit. Are you a 0 or 1?</h5>  */}
            {/* // Turn into its own component */}
            {questionsAndAnswers[questionIndex]}
        </div>
    )
};

export default Quiz;