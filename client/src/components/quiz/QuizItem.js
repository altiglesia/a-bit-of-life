import React from "react";

function QuizItem({ quizQuestion, showNextQuestion }) {
    const { question, options } = quizQuestion;

    const choices = options.map((option, index) => (
        <li key={index} value={index}>
            <button onClick={handleClick}>
                {option}
            </button>
        </li>
    ));

    function handleClick() {
        showNextQuestion()
    }

    return (
        <div>
            <h1>{question}</h1>
            <ul id="quizOptions">{choices}</ul>
        </div>
    )
}

export default QuizItem;