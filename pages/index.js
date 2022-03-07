import Head from 'next/head'
import Layout, {ContentContainer} from "../components/universal/layout"
import styles from "./Home.module.scss"
import ActivityFeed from "../components/feed/activityFeed";
import ContentLayoutContainer from "../components/universal/ContentLayoutContainer";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Intelligence - Activity</title>
                <meta name="description" content="Activity Feed and News"/>
            </Head>
            <ContentContainer>
                <ContentLayoutContainer>
                    <div className={styles.container}>
                        <ActivityFeed feedLength={50}/>
                        <div className={styles.right}>
                            Right Content
                        </div>
                    </div>
                </ContentLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}
