import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import SchedulingAll from "https://framer.com/m/SchedulingAll-Dcuy.js@D911WPf7xVqcmddtdmHs"

export default function Home() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="Schedules"/>
            </Head>
            <ContentContainer>
                <SchedulingAll/>
            </ContentContainer>
        </>
    )
}
