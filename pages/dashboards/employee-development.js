import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer";

export default function EmployeeDevelopment() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <title>Dashboards - Employee Development</title>
            </Head>
            <DashboardTitle label={"Employee Development"} icon={"ChartPieSlice"}/>
            <ContentContainer>
                <DashboardLayoutContainer>
                    Content
                </DashboardLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}
