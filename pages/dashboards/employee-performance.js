import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer";

export default function EmployeePerformance() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <title>Dashboards - Employee Performance</title>
            </Head>
            <DashboardTitle label={"Employee Performance"} icon={"HandsClapping"}/>
            <ContentContainer>
                <DashboardLayoutContainer>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        Content
                    </div>
                </DashboardLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}
