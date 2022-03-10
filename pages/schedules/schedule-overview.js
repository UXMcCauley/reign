import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import SchedulingAll from "https://framer.com/m/SchedulingAll-Dcuy.js@zfxJqulnWLCj6Qia4N97"

export default function Home() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="Schedules"/>
            </Head>
            <ContentContainer>
                <SchedulingAll onClick={() => {
                    alert("Clicked")
                }}
                               onClickDay={(event) => {
                                   console.log(event)
                               }}
                               onClickWeek={() => {
                                   alert("week")
                               }}
                               onClickMonth={() => {
                                   alert("month")
                               }}
                />
            </ContentContainer>
        </>
    )
}
