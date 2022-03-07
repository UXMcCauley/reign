import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/layout"
import ContentLayoutContainer from "../../components/universal/ContentLayoutContainer";
import AddEmployeeForm from "../../components/employees/addEmployeeForm";

export default function Settings() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Intelligence - Settings</title>
                <meta name="description" content="Account Settings"/>
            </Head>
            <ContentContainer>
                <ContentLayoutContainer>
                    <AddEmployeeForm/>
                </ContentLayoutContainer>
            </ContentContainer>

        </Layout>
    )
}
