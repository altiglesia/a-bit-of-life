import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizItem from "./QuizItem";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setUser } from "../store/user.js";


function Quiz() {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const username = useSelector(state => state.rootReducer.user.profile.username)
    const user = useSelector(state => state.rootReducer.user.profile)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigateBinaryValue = () => {
        navigate("/binaryValue");
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
            // navigateUserHome();
        }
    }
    
    function findValueOfCharacter() {
        let binaryNumberOfCharacter;
        if (Math.random() < 0.5) {
            binaryNumberOfCharacter = "zero"
            updateQuizResult(binaryNumberOfCharacter)
        } else if (Math.random() > 0.5) {
            binaryNumberOfCharacter = "one"
            updateQuizResult(binaryNumberOfCharacter)
        }
        return binaryNumberOfCharacter;
    }

    function updateQuizResult(binaryNumberOfCharacter) {
        console.log(binaryNumberOfCharacter)
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
        .then((res) => {
            if (res.ok) {
              res.json().then((res) => {
               dispatch(console.log({ ...user, quiz_results: res.quiz_results}))
              })
            navigateBinaryValue()
            } else if (res.status === "401") {
              throw new Error("unauthorized request");
            }
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
        <div id="quizPage">
            {questionsAndAnswers[questionIndex]}
        </div>
    )
};

export default Quiz;