import Header from "./header"
import Footer from "./footer"
import Head from "next/head";
import styles from "./styles/Layout.module.scss"
import VerticalIconMenu from "./verticalIconMenu";

export function ContentContainer({children}) {

    return (
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                <VerticalIconMenu size={28}/>
                <div style={{width: "100%"}}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default function Layout({children}) {
    return (
        <div className={styles.layout}>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN Analytics and Employee Management Software"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}