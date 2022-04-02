import Head from 'next/head'
import ContentContainer from "../../components/universal/ContentContainer"
import IconButton from "../../components/ui/iconButton";
import BackButton from "../../components/ui/backButton";

export default function AddNewKeycard() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Add a Keycard</title>
                <meta name="description" content="Add a new keycard"/>
            </Head>
            <ContentContainer>
                <div>
                    <BackButton/>
                    <IconButton icon={"add"} label={"Bulk Upload Tasks"} size={30}
                                link={"/employees/add-new-employee"}/>
                </div>
            </ContentContainer>
        </>

    )
}

