import Head from 'next/head'
import Layout, {ContentContainer} from "../components/universal/ui/layout"

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN Analytics and Employee Management Software"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <ContentContainer>
                <h1>Help Center</h1>
            </ContentContainer>

        </Layout>
    )
}
