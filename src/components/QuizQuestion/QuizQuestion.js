import React from 'react';

const QuizQuestion = ({ qs, id }) => {
    const { question, correctAnswer, options } = qs;
    const handleAnswer = (value) => {
        console.log(value);
    }
    return (
        <div>
            <h4>Question: {id} {question}</h4>
            <div>
                <p>Answer</p>

                <form>
                    <input type='radio' id='1' name='Your Answer' value={options[0]}></input>
                    <label for='1'>{options[0]}</label>
                    <input type='radio' id='2' name='Your Answer' value={options[1]}></input>
                    <label for='2'>{options[1]}</label>
                    <input type='radio' id='3' name='Your Answer' value={options[2]}></input>
                    <label for='3'>{options[2]}</label>
                    <input type='radio' id='4' name='Your Answer' value={options[3]}></input>
                    <label for='4'>{options[3]}</label>
                    <button onClick={() => handleAnswer()}>Check</button>
                </form>

                {/* <button>1: {options[0]}</button>
                <button>2: {options[1]}</button>
                <button>3: {options[2]}</button>
                <button>4: {options[3]}</button> */}
            </div>
        </div>
    );
};

export default QuizQuestion;