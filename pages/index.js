import Head from 'next/head'
import Layout, {ContentContainer} from "../components/universal/ui/layout"
import styles from "./Home.module.scss"
import ActivityFeed from "../components/feed/activityFeed";
import DashboardTitle from "../components/dashboards/dashboardTitle";
import ContentLayoutContainer from "../components/ContentLayoutContainer";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN - Intelligence Network "/>
            </Head>
            <DashboardTitle label={"Activity Feed & News"} icon={"ListBullets"}/>
            <ContentContainer>
                <ContentLayoutContainer>
                    <div className={styles.container}><ActivityFeed feedLength={50}/>
                        <div className={styles.right}>
                            Right Content
                        </div>
                    </div>
                </ContentLayoutContainer>
            </ContentContainer>

        </Layout>
    )
}
