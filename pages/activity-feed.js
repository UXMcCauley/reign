import Head from 'next/head'
import ContentContainer from "../components/universal/layout"
import styles from "../styles/Home.module.scss"
import ActivityFeed from "../components/feed/activityFeed";
import NewsAndEvents from "../components/feed/NewsAndEvents";

export default function ActivityFeedPage() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Activity</title>
                <meta name="description" content="Activity Feed and News"/>
            </Head>
            <ContentContainer>
                    <div className={styles.container}>
                        <ActivityFeed feedLength={10}/>
                        <NewsAndEvents/>
                    </div>

            </ContentContainer>
        </>
    )
}