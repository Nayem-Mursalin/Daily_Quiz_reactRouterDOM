import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { name, logo, id, total } = quiz;
    console.log(quiz);
    return (
        <div className='quiz'>
            <img src={logo} alt='logo'></img>
            <h2>{name}</h2>
            <p><small>Total Question: {total}</small></p>
            <button><Link to={`/quiz/${id}`}>Start {name} Quiz</Link></button>
        </div>
    );
};

export default Quiz;