import Head from 'next/head'
import Layout, {ContentContainer} from "../components/universal/ui/layout"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import DashboardStatusLine from "../components/dashboards/dashboardStatusLine";
import DashboardMenu from "../components/dashboards/dashboardMenu";
import DashboardTitle from "../components/dashboards/dashboardTitle";

export default function SalaryOverview() {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <link rel="icon" href="/favicon.ico"/>
                <title>Dashboards - Salary Overview</title>
            </Head>
            <ContentContainer>
                <DashboardStatusLine/>
                <DashboardTitle label={"Salary Overview"} icon={"Money"}/>
                <DashboardMenu/>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{width: "24%"}}>
                        <Doughnut data={data}/>
                    </div>
                    <div style={{width: "24%"}}>
                        <Doughnut data={data}/>
                    </div>
                    <div style={{width: "24%"}}>
                        <Doughnut data={data}/>
                    </div>
                    <div style={{width: "24%"}}>
                        <Doughnut data={data}/>
                    </div>
                </div>
            </ContentContainer>
        </Layout>
    )
}
