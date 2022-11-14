import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({weatherData}) {
  const {current : {curr_temp_f}, forecast } = weatherData;
  return (
    <div>
        <div>
            {`Current Temperature : ${curr_temp_f}`}
        </div>
        <div className='h-96 w-96'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={forecast}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temp_f" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}
