import React from 'react';
import './QuizQuestion.css'

const QuizQuestion = ({ qs, id }) => {
    const { question, correctAnswer, options } = qs;
    //console.log(qs);
    const showAns = (ans) => {
        alert(ans);
    }
    const checkAns = (e) => {
        //console.log(e);
        if (e === correctAnswer) {
            alert('Yes')
        }
        else {
            alert('Wrong Ans');
        }
    }

    return (
        <div className='quiz-question'>
            <h4>Question: {id} {question}</h4>
            <button onClick={() => showAns(correctAnswer)}>Ans</button>
            <div className='quiz-ans'>
                <p>Answer</p>

                <div className='quiz-option'>
                    <div>
                        {
                            qs.options.map(option =>
                                <label className='option' htmlFor='1' onClick={() => checkAns(option)}>
                                    <input type='radio' name='action'></input>
                                    {option}
                                </label>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default QuizQuestion;