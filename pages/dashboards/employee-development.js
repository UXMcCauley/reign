import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import DashboardContentContainer from "../../components/dashboards/dashboardContentContainer";

export default function EmployeeDevelopment() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <link rel="icon" href="/public/favicon.ico"/>
                <title>Dashboards - Employee Development</title>
            </Head>
            <DashboardTitle label={"Employee Development"} icon={"ChartPieSlice"}/>
            <ContentContainer>
                <DashboardContentContainer>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        Content
                    </div>
                </DashboardContentContainer>
            </ContentContainer>
        </Layout>
    )
}
