import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import IconButton from "../../components/universal/ui/iconButton";
import BackButton from "../../components/universal/ui/backButton";

export default function AddNewKeycard() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN - Add a new keycard"/>
            </Head>
            <DashboardTitle label={"Keycards"} icon={"Key"}/>
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

