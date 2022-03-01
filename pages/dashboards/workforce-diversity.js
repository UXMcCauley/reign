import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DashboardTitle from "../../components/dashboards/dashboardTitle"
import DashboardContentContainer from "../../components/dashboards/dashboardContentContainer";

export default function WorkforceDiversity() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <link rel="icon" href="/public/favicon.ico"/>
                <title>Dashboards - Workforce Diversity</title>
            </Head>
            <DashboardTitle label={"Workforce Diversity"} icon={"Fingerprint"}/>
            <ContentContainer>
                <DashboardContentContainer>
                    Content
                </DashboardContentContainer>
            </ContentContainer>
        </Layout>
    )
}
