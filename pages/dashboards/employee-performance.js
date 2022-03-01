import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import DashboardStatusLine from "../../components/dashboards/dashboardStatusLine";
import DashboardTitle from "../../components/dashboards/dashboardTitle";

export default function EmployeePerformance() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <link rel="icon" href="/public/favicon.ico"/>
                <title>Dashboards - Employee Performance</title>
            </Head>
            <ContentContainer>
                <DashboardStatusLine/>
                <DashboardTitle label={"Employee Performance"} icon={"HandsClapping"}/>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    Content
                </div>
            </ContentContainer>
        </Layout>
    )
}
