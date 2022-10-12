import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import './MyQuiz.css'

const MyQuiz = () => {
    let quesNo = 0;
    let mistake = 0;
    let rightAns = 0;
    const myQuiz = useLoaderData();
    //console.log(myQuiz);
    return (
        <div className='quiz-outlet'>
            <h2>{myQuiz.data.name} Quiz</h2>
            <div>
                {
                    myQuiz.data.questions.map(qs => <QuizQuestion
                        key={qs.id}
                        qs={qs}
                        id={++quesNo}
                        rightAns={rightAns}
                        mistake={mistake}
                    ></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default MyQuiz;