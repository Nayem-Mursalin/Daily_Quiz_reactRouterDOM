import React from 'react';
import './QuizQuestion.css'

const QuizQuestion = ({ qs, id }) => {
    const { question, correctAnswer, options } = qs;
    let mistake = 0;
    let rightAns = 0;
    //console.log(qs);
    const showAns = (ans) => {
        alert(ans);
    }
    const checkAns = (e) => {
        //console.log(e);
        if (e === correctAnswer) {
            ++rightAns;
            console.log(rightAns);
            alert('Yes');
        }
        else {
            ++mistake;
            console.log(mistake);
            alert('Wrong Ans');
        }
    }

    return (
        <div className='quiz-question'>
            <h4>Question: {id} {question}</h4>
            <button onClick={() => showAns(correctAnswer)}> See Ans</button>
            <div className='quiz-ans'>

                <div className='quiz-option'>
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
    );
};

export default QuizQuestion;