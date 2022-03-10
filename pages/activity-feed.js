import Head from 'next/head'
import ContentContainer from "../components/universal/layout"
import styles from "../styles/Home.module.scss"
import ApprovalPane from "https://framer.com/m/ApprovalPane-hj4o.js@PbOAyJcWGaZ6bWVx6mBe"
import FeedTiles from "https://framer.com/m/FeedTiles-GNn4.js@RWmDqs1cB7vSu8Dx2qQl"

export default function ActivityFeedPage() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Activity</title>
                <meta name="description" content="Activity Feed and News"/>
            </Head>
            <ContentContainer>
                <div className={styles.container}>
                    <div style={{padding: 50, display: "flex"}}>
                        <ApprovalPane/>
                        <div style={{padding: "35px 0 0 80px"}}>
                        <FeedTiles/>
                        </div>
                    </div>
                </div>

            </ContentContainer>
        </>
    )
}
