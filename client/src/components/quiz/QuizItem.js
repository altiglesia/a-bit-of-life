import React from "react";
import useKeyboard from "../../hooks/useKeyboard";

function QuizItem({ quizQuestion, showNextQuestion }) {
    const { question, options } = quizQuestion;

    const choices = options.map((option, index) => (
        <li key={index} value={index}>
            <input id="arrow" type="radio" className="nes-radio" name="answer" checked onChange={(e) => console.log(e.target.value)} onClick={clickArrowRadio}/>
                <span>
                    {option}
                </span>
        </li>
    ));

    function clickArrowRadio() {
        console.log("i'm clicked")
    }

    useKeyboard((e) => {

        switch(e.keyCode) {
            case 13:
                console.log('enter key hit')
                showNextQuestion()
                break;
            case 37:
                console.log("Left key is pressed.");
                clickArrowRadio();
                break;
            case 38:
                console.log("Up key is pressed.");
                clickArrowRadio();
                break;
            case 39:
                console.log("Right key is pressed.");
                clickArrowRadio();
                break;
            case 40:
                console.log("Down key is pressed.");
                clickArrowRadio();
                break;         
        }
    })

    // window.addEventListener('keypress', function (e) {
    //     if (e.key === 'Enter') {
    //       // code for enter
    //       showNextQuestion()
    //     }
    // });
    
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