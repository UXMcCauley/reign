import Head from 'next/head'
import Layout, {ContentContainer} from "../components/universal/ui/layout"
import styles from "./Home.module.scss"
import ActivityFeed from "../components/feed/activityFeed";
import NewsAndEvents from "../components/feed/newsAndEvents";
import NonDashboardContentContainer from "../components/dashboards/nonDashboardContentContainer";
import DashboardTitle from "../components/dashboards/dashboardTitle";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN Analytics and Employee Management Software"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <DashboardTitle label={"Activity Feed & News"} icon={"ListBullets"}/>
            <ContentContainer>
                <NonDashboardContentContainer>
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <ActivityFeed feedLength={50}/>
                        </div>
                        <div className={styles.right}>
                            <h1>Shortcuts</h1>
                            <hr/>
                            <NewsAndEvents/>

                        </div>
                    </div>
                </NonDashboardContentContainer>
            </ContentContainer>
        </Layout>
    )
}
