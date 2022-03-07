import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/layout"
import IconButton from "../../components/universal/ui/iconButton";
import BackButton from "../../components/universal/ui/backButton";

export default function AddNewKeycard() {
    return (
        <Layout>
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
        </Layout>
    )
}

