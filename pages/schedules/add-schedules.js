import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import AddShiftsFlyin from "https://framer.com/m/AddShiftsFlyin-geLH.js@02o8EOYS6J0lZml4aRu3"


export default function AddSchedules() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="Add Schedules"/>
            </Head>
            <ContentContainer>
                <AddShiftsFlyin style={{backgroundColor: "transparent"}} variant={"Variant 2"}/>
            </ContentContainer>
        </>
    )
}
