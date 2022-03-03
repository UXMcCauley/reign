import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import ContentLayoutContainer from "../../components/ContentLayoutContainer";
import VendorGrid from "../../components/data/vendorGrid";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN Analytics and Employee Management Software"/>
            </Head>
            <DashboardTitle label={"Data"} icon={"Database"}/>
            <ContentContainer>
                <ContentLayoutContainer>
                    <VendorGrid/>
                </ContentLayoutContainer>
            </ContentContainer>

        </Layout>
    )
}
