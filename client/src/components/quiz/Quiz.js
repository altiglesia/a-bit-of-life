import React, { useEffect, useState } from "react";
import QuizItem from "./QuizItem";

function Quiz() {
    const [quizQuestions, setquizQuestions] = useState([]);

    useEffect(() => {
        fetch('/quiz_questions')
        .then((res) => {
            if (res.ok) {
                res.json().then((data) => setquizQuestions(data))
            } else {
                return res.text().then((text) => Promise.reject(text))
            }
        })
    }, [])

    const questionsAndAnswers = quizQuestions.map((quizQuestion) => (
        <QuizItem 
            key={quizQuestion.id}
            quizQuestion={quizQuestion}
        />
    ))

    return (
        <section>
            <ul>
                {questionsAndAnswers}
            </ul>
        </section>
    )
};

export default Quiz;