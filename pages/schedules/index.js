import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/layout"
import ContentLayoutContainer from "../../components/universal/ContentLayoutContainer";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="Schedules"/>
            </Head>
            <ContentContainer>
                <ContentLayoutContainer>
                    Schedules Here
                </ContentLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}
