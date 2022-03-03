import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import {TreeMapComponent} from '@syncfusion/ej2-react-treemap';

import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
} from 'chart.js';
import {Doughnut, Line, Bar} from 'react-chartjs-2';
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import NumericDisplay from "../../components/dashboards/numericDisplay";
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer";
import styles from "./Executive.module.scss"

export default function Executive() {
    ChartJS.register(ArcElement,
        BarElement,
        Tooltip,
        Legend,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title);

    const donutOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false
            },
            title: {
                display: true,
                text: 'Performance by Rating',
            },
        },
    }
    const donutData = {
        labels: ['<5', '5-6', '6-7', '7-8', '8-9', '9-10'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgb(204,242,12)',
                    'rgb(23,108,228)',
                    'rgb(238,252,4)',
                    'rgb(176,89,182)',
                    'rgb(79,10,231)',
                    'rgb(255, 159, 64)',
                ],
                borderColor: [
                    'rgb(204,242,12)',
                    'rgb(23,108,228)',
                    'rgb(255, 206, 86)',
                    'rgb(176,89,182)',
                    'rgb(79,10,231)',
                    'rgb(255, 159, 64)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"]
    const lineChartData = {
        labels,
        datasets: [
            {
                label: 'Terminations',
                data: [11, 4, 18, 21, 3],
                borderColor: 'rgb(22,110,235)',
                backgroundColor: 'rgb(22,110,235)',
            },
            {
                label: 'New Hires',
                data: [4, 13, 11, 4, 4],
                borderColor: 'rgb(204,242,12)',
                backgroundColor: 'rgb(204,242,12)',
            },
            {
                label: 'Promotions',
                data: [15, 2, 7, 18, 1],
                borderColor: 'rgb(181,90,187)',
                backgroundColor: 'rgb(181,90,187)',
            },
        ],
    };
    const barOptions = {
        indexAxis: 'x',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                display: false,
            },
            title: {
                display: true,
                text: 'Total Employee by Keycard',
            },
        },
    };
    const barData = {
        labels: ['Res Roofer', 'Carpenter', 'Concrete', 'Gen Labor', 'Siding Inst', "Comm. Roofer", 'Painter', 'Flooring Inst', "HVAC", "Manufacturing"],
        datasets: [
            {
                label: 'Employees',
                data: [650, 563, 321, 210, 200, 165, 121, 99, 84, 13],
                backgroundColor: 'rgb(24,106,221)',
            }
        ],
    };
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <link rel="icon" href="/public/favicon.ico"/>
                <title>Dashboards - Executive Overview</title>
            </Head>
            <DashboardTitle label={"Executive Overview"} icon={"Gauge"}/>
            <ContentContainer>

                <DashboardLayoutContainer>
                    <div>
                        <div className={styles.flexRow}>
                            <NumericDisplay title={"Employees"} number={1128}/>
                            <NumericDisplay title={"Payroll Average"} number={41541} isMoney={true}/>
                            <NumericDisplay title={"New Hires"} number={101}/>
                            <NumericDisplay title={"Training Hours"} number={20113} toggle={false}/>
                            <NumericDisplay title={"Production Hours"} number={66925}/>
                            <NumericDisplay title={"Raises"} number={"577"}/>
                        </div>
                    </div>

                    <div>
                        <div className={styles.flexRow}>
                            <div style={{width: "24%"}}>
                                <Doughnut data={donutData} type={"doughnut"} options={donutOptions}/>
                            </div>
                            <div style={{width: "24%"}}>
                                <Doughnut data={donutData} type={"doughnut"} options={donutOptions}/>
                            </div>
                            <div style={{width: "24%"}}>
                                <Doughnut data={donutData} type={"doughnut"} options={donutOptions}/>
                            </div>
                            <div style={{width: "24%"}}>
                                <Doughnut data={donutData} type={"doughnut"} options={donutOptions}/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.flexRow}>
                            <div className={styles.half}>
                                <Line options={lineOptions} data={lineChartData} type={"Line"}/>
                            </div>
                            <div className={styles.half}>
                                <Bar type={"Bar"} data={barData} options={barOptions}/>
                            </div>
                        </div>
                    </div>

                    <div>

                        <div>
                            <h1>Production Hours per Keycard</h1>
                            <div style={{width: "100%"}}>
                                <TreeMapComponent id='treemap'
                                                  dataSource={[
                                                      {Keycard: 'Res Roofer', GDP: 17946, percentage: 11.08, Rank: 1},
                                                      {Keycard: 'Carpenter', GDP: 10866, percentage: 28.42, Rank: 2},
                                                      {Keycard: 'Concrete', GDP: 4123, percentage: -30.78, Rank: 3},
                                                      {Keycard: 'Gen Labor', GDP: 3355, percentage: -5.19, Rank: 4},
                                                      {Keycard: 'Siding Inst', GDP: 2848, percentage: 8.28, Rank: 5},
                                                      {Keycard: "Comm. Roofer", GDP: 2421, percentage: -9.69, Rank: 6},
                                                      {Keycard: 'Painter', GDP: 2073, percentage: 13.65, Rank: 7},
                                                      {
                                                          Keycard: 'Flooring Inst',
                                                          GDP: 1814,
                                                          percentage: -12.45,
                                                          Rank: 8
                                                      },
                                                      {Keycard: "HVAC", GDP: 1774, percentage: -27.88, Rank: 9},
                                                      {
                                                          Keycard: "Manufacturing",
                                                          GDP: 1550,
                                                          percentage: -15.02,
                                                          Rank: 10
                                                      }
                                                  ]} weightValuePath='GDP'
                                                  palette={['rgb(211,250,0)', 'rgb(23,108,228)', 'rgb(4,215,252)', 'rgb(255,0,183)', 'rgb(79,10,231)', 'rgb(255, 159, 64)', 'rgb(255, 159, 64)']}
                                                  leafItemSettings={{
                                                      labelPath: 'Keycard',
                                                      labelTemplate: '<div>{{:GDP}}hrs</div>',
                                                      templatePosition: 'Center'
                                                  }}>
                                </TreeMapComponent></div>

                        </div>
                    </div>
                </DashboardLayoutContainer>

            </ContentContainer>
        </Layout>
    )
}
