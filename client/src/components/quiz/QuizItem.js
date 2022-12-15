import React from "react";

function QuizItem({ quizQuestion }) {
    const { question, options } = quizQuestion;

    const choices = options.map((option, index) => (
        <option key={index} value={index}>
            {option}
        </option>
    ));


    return (
        <div>
            <li>
                <h5>{question}</h5>
                <select>{choices}</select>
            </li>
        </div>
    )
}

export default QuizItem;