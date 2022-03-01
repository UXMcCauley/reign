import Head from 'next/head'
import Layout, {ContentContainer} from "../components/universal/ui/layout"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import DashboardStatusLine from "../components/dashboards/dashboardStatusLine";
import DashboardTitle from "../components/dashboards/dashboardTitle";
import styles from "./EmployeeDevelopment.module.scss"

export default function EmployeeDevelopment() {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <link rel="icon" href="/public/favicon.ico"/>
                <title>Dashboards - Employee Development</title>
            </Head>
            <ContentContainer>

                <DashboardTitle label={"Employee Development"} icon={"ChartPieSlice"}/>
                <div className={styles.container}>
                    <DashboardStatusLine/>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        Content
                    </div>
                </div>
            </ContentContainer>
        </Layout>
    )
}
