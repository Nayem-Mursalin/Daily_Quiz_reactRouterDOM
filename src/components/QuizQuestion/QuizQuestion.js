import React from 'react';
import './QuizQuestion.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const QuizQuestion = ({ qs, id }) => {
    const { question, correctAnswer, options, rightAns, mistake } = qs;

    //console.log(qs);
    const showAns = (ans) => {
        toast(`Right Answer is: ${ans}`);
    }
    const checkAns = (e) => {
        //console.log(e);
        if (e === correctAnswer) {
            //rightAns++;
            console.log(rightAns);
            toast(`Yes!, You Choose the Right Answer.`);
        }
        else {
            //mistake++;
            toast(`No, That is Wrong.`);
        }
    }

    return (
        <div className='quiz-question'>
            <h4>Question: {id} {question}</h4>
            <button className='eye' onClick={() => showAns(correctAnswer)}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
            <ToastContainer />
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