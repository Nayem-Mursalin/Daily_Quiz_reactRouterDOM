import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyQuiz = () => {
    const myQuiz = useLoaderData();
    console.log(myQuiz);
    return (
        <div>
            <h2>{myQuiz.data.name} Quiz</h2>
        </div>
    );
};

export default MyQuiz;