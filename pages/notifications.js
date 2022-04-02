import Head from 'next/head'
import ContentContainer from "../components/universal/ContentContainer"
import styles from "./timecards/styles/Timecards.module.scss"

export default function Notifications() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN Workforce Analytics"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <ContentContainer>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h1>Notification</h1>
                        <hr/>
                    </div>
                    <div className={styles.right}>
                        <h1>Notification Side</h1>
                        <hr/>
                    </div>
                </div>
            </ContentContainer>

        </>
    )
}
