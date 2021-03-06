import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import NonDashboardContentContainer from "../../components/dashboards/nonDashboardContentContainer";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN Analytics and Employee Management Software"/>
            </Head>
            <DashboardTitle label={"Keycards"} icon={"Key"}/>
            <ContentContainer>
                <NonDashboardContentContainer>
                    Content
                </NonDashboardContentContainer>
            </ContentContainer>

        </Layout>
    )
}
