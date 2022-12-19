import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizItem from "./QuizItem";
import { useSelector } from "react-redux";
// import { setUser } from "../store/user";

function Quiz() {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    // const [quizResults, setQuizResults] = useState({quiz_result: null});

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
            // invoke another function here to send a patch request to backend
            findValueOfCharacter();
            navigateUserHome();
            // setQuizResults();
            // send a patch request to the backend that updates the quiz result of the User signed in (either 1 or 0)
        }
    }
    
    function findValueOfCharacter() {
        let binaryNumberOfCharacter;
        if (Math.random() < 0.5) {
            binaryNumberOfCharacter = true
            updateQuizResult(binaryNumberOfCharacter)
        } else if (Math.random() > 0.5) {
            // console.log(Math.random())
            binaryNumberOfCharacter = false
            updateQuizResult(binaryNumberOfCharacter)
            // console.log(binaryNumberOfCharacter)
        }
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
        <section>
            <h5>You've been turned into a Bit. Are you a 0 or 1?</h5>
            <div>{questionsAndAnswers[questionIndex]}</div>
        </section>
    )
};

export default Quiz;