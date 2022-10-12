import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { name, logo } = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt='logo'></img>
            <h2>{name}</h2>
            <button>Start {name} Quiz</button>
        </div>
    );
};

export default Quiz;