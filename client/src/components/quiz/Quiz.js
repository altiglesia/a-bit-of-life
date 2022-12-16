import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizItem from "./QuizItem";

function Quiz() {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [quizResults, setQuizResults] = useState({quiz_result: null});

    const navigate = useNavigate();

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
        let binaryNumberOfCharacter;
        if (questionIndex < 9) {
            setQuestionIndex(i => i + 1)
        } else {
            // invoke another function here to send a patch request to backend
            if (Math.random() < 0.5) {
                binaryNumberOfCharacter = "one"
            } else if (Math.random() > 0.5) {
                // console.log(Math.random())
                binaryNumberOfCharacter = "zero"
                // console.log(binaryNumberOfCharacter)
            }
        navigateUserHome();
            // setQuizResults();
            // send a patch request to the backend that updates the quiz result of the User signed in (either 1 or 0)
        }
        return console.log(binaryNumberOfCharacter)
    }

    // on click, the number will be generated

    // set condition logic
    // if Math.random(0...1.0) < 5 {
        // return "You are a 1"
    // } else {
    //     you are a 0
    // }

    // function updateQuizResult() {
    //     fetch("/api/v1/profile", {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             user: {
    //                 username,
    //                 quiz_result: ""
    //             }
    //         })
    //     })
    // }

    const questionsAndAnswers = quizQuestions.map((quizQuestion) => (
        <QuizItem 
            key={quizQuestion.id}
            quizQuestion={quizQuestion}
            showNextQuestion={showNextQuestion}
        />
    ))

    return (
        <section>
            <div>{questionsAndAnswers[questionIndex]}</div>
        </section>
    )
};

export default Quiz;