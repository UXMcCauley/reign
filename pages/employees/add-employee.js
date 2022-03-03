import styles from "./AddNewEmployee.module.scss"
import Head from "next/head";
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import Layout, {ContentContainer} from "../../components/universal/ui/layout";
import ContentLayoutContainer from "../../components/ContentLayoutContainer";
import BackButton from "../../components/universal/ui/backButton";

export default function AddEmployee(){
    return (
        <Layout>
            <Head>
                <title>REIGN - Add a New Employee</title>
                <meta name="description" content="REIGN - Add a New Employee"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <DashboardTitle label={"Add a New Employee"} icon={"Person"}/>
            <ContentContainer>
                <ContentLayoutContainer>
                    <div className={styles.container}>
                        <BackButton/>
                    </div>
                </ContentLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}