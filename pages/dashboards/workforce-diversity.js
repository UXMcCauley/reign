import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DashboardTitle from "../../components/dashboards/dashboardTitle"
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer";

export default function WorkforceDiversity() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <title>Dashboards - Workforce Diversity</title>
            </Head>
            <DashboardTitle label={"Workforce Diversity"} icon={"Fingerprint"}/>

            <ContentContainer>
                <DashboardLayoutContainer>
                    Content
                </DashboardLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}
