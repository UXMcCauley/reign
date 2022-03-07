import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/layout"
import ContentLayoutContainer from "../../components/universal/ContentLayoutContainer";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Intelligence - Help</title>
                <meta name="description" content=" Help Center"/>
            </Head>
            <ContentContainer>
                <ContentLayoutContainer>

                </ContentLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}
