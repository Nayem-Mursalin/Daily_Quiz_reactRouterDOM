import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const stat = useLoaderData();

    console.log(stat.data);
    return (
        <div>
            <h2>This is Statistics Page</h2>
            <LineChart width={500} height={400} data={stat.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};
export default Statistics;