import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import NonDashboardContentContainer from "../../components/dashboards/nonDashboardContentContainer";
import DashboardTitle from "../../components/dashboards/dashboardTitle";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN Analytics and Employee Management Software"/>
            </Head>
            <DashboardTitle label={"Data"} icon={"Database"}/>
            <ContentContainer>
                <NonDashboardContentContainer>
                    Content
                </NonDashboardContentContainer>
            </ContentContainer>

        </Layout>
    )
}
