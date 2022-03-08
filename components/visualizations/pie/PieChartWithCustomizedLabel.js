import React, {PureComponent} from 'react';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200},
];

const COLORS = [
    "rgba(225, 33, 98, 0.5)",
    "rgba(188, 26, 90, 0.5)",
    "rgba(152, 41, 171, 0.5)",
    "rgba(85, 40, 171, 0.5)",
    "rgba(40, 43, 171, 0.5)",
    "rgba(39, 105, 170, 0.5)",
    "rgba(86, 168, 215, 0.5)",
    "rgba(86, 213, 184, 0.5)",
    "rgba(96, 193, 134, 0.5)"
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class PieChartWithCustomizedLabel extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

    render() {
        return (
            <div style={{width: "600px", height: "600px"}}>
                <ResponsiveContainer  width="99%" aspect={1}>
                    <PieChart style={{width: "600px", height: "600px"}}>
                        <Pie
                            data={data}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
