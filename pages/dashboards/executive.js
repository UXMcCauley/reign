import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import NumericDisplay from "../../components/dashboards/numericDisplay";
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer";

export default function Executive() {
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
                <link rel="icon" href="/public/favicon.ico"/>
                <title>Dashboards - Executive Overview</title>
            </Head>
            <DashboardTitle label={"Executive Overview"} icon={"Gauge"}/>
            <ContentContainer>

                <DashboardLayoutContainer>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <NumericDisplay title={"Employees"} number={1128}/>
                        <NumericDisplay title={"Payroll Average"} number={41541} isMoney={true}/>
                        <NumericDisplay title={"New Hires"} number={101}/>
                        <NumericDisplay title={"Training Hours"} number={20113} toggle={false}/>
                        <NumericDisplay title={"Production Hours"} number={66925}/>
                        <NumericDisplay title={"Raises"} number={"577"}/>
                    </div>
                    <hr style={{margin: "30px 0"}}/>

                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{width: "24%"}}>
                            <Doughnut data={data} type={"doughnut"}/>
                        </div>
                        <div style={{width: "24%"}}>
                            <Doughnut data={data} type={"doughnut"}/>
                        </div>
                        <div style={{width: "24%"}}>
                            <Doughnut data={data} type={"doughnut"}/>
                        </div>
                        <div style={{width: "24%"}}>
                            <Doughnut data={data} type={"doughnut"}/>
                        </div>
                    </div>
                </DashboardLayoutContainer>
              
            </ContentContainer>
        </Layout>
    )
}
