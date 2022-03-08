import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380,
    },
];

export default class LineBarAreaComposedChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="rgba(225, 33, 98, 0.5)" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="amt" fill="rgba(152, 41, 171, 0.5)" stroke="#9829ab" />
                    <Bar dataKey="pv" barSize={20} fill="rgba(39, 105, 170, 0.5)" />
                    <Line type="monotone" dataKey="uv" stroke="rgba(96, 193, 134, 0.5)" />
                    <Scatter dataKey="cnt" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
