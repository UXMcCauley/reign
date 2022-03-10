import Head from 'next/head'
import styles from "../styles/SignIn.module.scss"
import Image from "next/image";
import {router} from "next/client";


export default function SignIn() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Activity</title>
                <meta name="description" content="Activity Feed and News"/>
            </Head>
            <div className={styles.container}>
                <div className={`${styles.loading} ${isLoading === true ? styles.active : null}`}>
                    <Image className={styles.image} alt={"Loading image..."} width={100} height={100}
                           src={"/circleball.gif"}/>
                    <p>loading...</p>
                </div>
                <div className={`${styles.formContainer} ${isLoading === true ? styles.hidden : null}`}>

                        <button onClick={() => {
                            router.push("/dashboards/executive-summary")
                        }}>Log in
                        </button>

                </div>
            </div>
        </>
    )
}
