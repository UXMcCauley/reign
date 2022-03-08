import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '18-24',
        uv: 31.47,
        pv: 2400,
        fill: 'rgba(225, 33, 98, 0.5)',
    },
    {
        name: '25-29',
        uv: 26.69,
        pv: 4567,
        fill: 'rgba(188, 26, 90, 0.5)',
    },
    {
        name: '30-34',
        uv: 15.69,
        pv: 1398,
        fill: 'rgba(152, 41, 171, 0.5)',
    },
    {
        name: '35-39',
        uv: 8.22,
        pv: 9800,
        fill: 'rgba(85, 40, 171, 0.5)',
    },
    {
        name: '40-49',
        uv: 8.63,
        pv: 3908,
        fill: 'rgba(40, 43, 171, 0.5)',
    },
    {
        name: '50+',
        uv: 2.63,
        pv: 4800,
        fill: 'rgba(39, 105, 170, 0.5)',
    },
    {
        name: 'unknow',
        uv: 6.67,
        pv: 4800,
        fill: 'rgba(86, 168, 215, 0.5)',
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

export default class SimpleRadialBarChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                    <RadialBar
                        minAngle={15}
                        label={{ position: 'insideStart', fill: '#000000' }}
                        background
                        clockWise
                        dataKey="uv"
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                </RadialBarChart>
            </ResponsiveContainer>
        );
    }
}
