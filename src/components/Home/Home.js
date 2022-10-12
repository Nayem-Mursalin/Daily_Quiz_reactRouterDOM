import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css';

const Home = () => {
    const quizs = useLoaderData();
    return (
        <div className='home-container'>
            <div className='upper-home'>
                <h1>Give this Quiz to Check your Knowledge</h1>
            </div>
            <div className='quiz-container'>
                {
                    quizs.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;