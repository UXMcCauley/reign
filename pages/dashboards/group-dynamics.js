import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer";

export default function SalaryOverview() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <title>Dashboards - Group Dynamics</title>
            </Head>
            <DashboardTitle label={"Group Dynamics"} icon={"Person"}/>
            <ContentContainer>
                <DashboardLayoutContainer>
                    Content
                </DashboardLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}
