import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/layout"
import ContentLayoutContainer from "../../components/universal/ContentLayoutContainer";
import VendorGrid from "../../components/data/vendorGrid";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Intelligence - Data Export</title>
                <meta name="description" content="Data Export"/>
            </Head>
            <ContentContainer>
                <ContentLayoutContainer>
                    <VendorGrid/>
                </ContentLayoutContainer>
            </ContentContainer>

        </Layout>
    )
}
