import Head from 'next/head'
import Layout, {ContentContainer} from "../components/universal/ui/layout"
import styles from "./Home.module.scss"
import ActivityFeed from "../components/feed/activityFeed";
import DashboardTitle from "../components/dashboards/dashboardTitle";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN - Intelligence Network "/>
            </Head>
            <DashboardTitle label={"Activity Feed & News"} icon={"ListBullets"}/>
            <ContentContainer>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <ActivityFeed feedLength={50}/>
                    </div>
                    <div className={styles.right}>
Right Content
                    </div>
                </div>
            </ContentContainer>

        </Layout>
    )
}
