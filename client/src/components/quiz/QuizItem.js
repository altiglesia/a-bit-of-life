import React from "react";
import useKeyboard from "../../hooks/useKeyboard";

function QuizItem({ quizQuestion, showNextQuestion }) {
    const { question, options } = quizQuestion;

    const choices = options.map((option, index) => (
        <li key={index} value={index}>
            <input id="arrow" type="radio" className="nes-radio" name="answer" checked onChange={handleChange} />
                <span>
                    {option}
                </span>
        </li>
    ));

    function handleChange(e) {
        console.log(e.target.value)
    }

    useKeyboard((e) => {
        switch(e.keyCode) {
            case 13:
                showNextQuestion()
                break;
            case 37:
                document.querySelector('input').focus();
                break;
            case 38:
                document.querySelector('input').focus();
                break;
            case 39:
                document.querySelector('input').focus();
                break;
            case 40:
                document.querySelector('input').focus();
                break;
            default: ;
        }
    })
    
    return (
        <div id="quizItem">
            <div id="quizOptionsContainer">
                <label>
                    <ul id="quizOptions">{choices}</ul>
                </label>
            </div>
            <div id="questionContainer">
                <h1>{question}</h1>
            </div>
        </div>
    )
}

export default QuizItem;