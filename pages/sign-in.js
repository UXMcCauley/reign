import {useState} from "react";

// import Next modules and hooks
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"


// import my components
import {PrimaryButton} from "../components/Buttons";
import styles from "../styles/SignIn.module.scss"

export default function SignIn() {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

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
                    <h1>Sign In</h1>
                    <span className={`${styles.error} ${error === true ? styles.active : null}`}>Username or password incorrect. Please try again.</span>
                    <input type={"text"} value={username} autoComplete={"current-username"} onChange={(event) => {
                        setUsername(event.target.value)
                    }}/>
                    <input type={"password"} value={password} autoComplete={"current-password"}
                           onChange={(event) => {
                               setPassword(event.target.value)
                           }}/>
                    <Link passHref href={"/dashboards/executive-summary"}>
                        <a><PrimaryButton label={"Log in"} color={"pink"}/></a>
                    </Link>
                </div>
            </div>
        </>
    )
}
