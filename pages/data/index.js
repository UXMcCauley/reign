import Head from 'next/head'
import ContentContainer from "../../components/ContentContainer"
import VendorGrid from "../../components/data/vendorGrid";

export default function Home() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Data Export</title>
                <meta name="description" content="Data Export"/>
            </Head>
            <ContentContainer>
                <VendorGrid/>
            </ContentContainer>
        </>
    )
}
