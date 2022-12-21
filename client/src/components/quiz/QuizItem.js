import React from "react";

function QuizItem({ quizQuestion, showNextQuestion }) {
    const { question, options } = quizQuestion;

    const choices = options.map((option, index) => (
        <li key={index} value={index}>
            <input type="radio" className="nes-radio" name="answer" checked onChange={(e) => console.log(e.target.value)}/>
                <span onClick={handleClick}>
                    {/* <button > */}
                        {option}
                    {/* </button> */}
                </span>
        </li>

    ));

    function handleClick() {
        showNextQuestion()
    }
    
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