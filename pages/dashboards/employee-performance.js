import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import DashboardStatusLine from "../../components/dashboards/dashboardStatusLine";
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import DashboardContentContainer from "../../components/dashboards/dashboardContentContainer";

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
            <DashboardTitle label={"Employee Performance"} icon={"HandsClapping"}/>
            <ContentContainer>
                <DashboardContentContainer>
                    <DashboardStatusLine/>

                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        Content
                    </div>
                </DashboardContentContainer>
            </ContentContainer>
        </Layout>
    )
}
