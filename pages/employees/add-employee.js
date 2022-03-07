import styles from "./styles/AddNewEmployee.module.scss"
import Head from "next/head";
import Layout, {ContentContainer} from "../../components/universal/layout";
import ContentLayoutContainer from "../../components/universal/ContentLayoutContainer";
import BackButton from "../../components/universal/ui/backButton";

export default function AddEmployee(){
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Intelligence - Add a New Employee</title>
                <meta name="description" content="Add a New Employee"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
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
