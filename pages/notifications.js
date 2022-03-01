import Head from 'next/head'
import Layout, {ContentContainer} from "./components/universal/ui/layout"
import styles from "./Home.module.scss"

export default function Notifications() {
    return (
        <Layout>
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

        </Layout>
    )
}
