import Head from 'next/head'
import {useState} from "react";
import styles from "../styles/SignIn.module.scss"
import Image from "next/image";
import {useRouter} from "next/router";
import {useCookie} from 'next-cookie'

export default function SignIn() {
    const cookie = useCookie()
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // console.log(window.location)

    const checkUser = async () => {
        await fetch('/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: username, password: password})
        })
            .then(response => response.json())
            .then(data => {
                setError(false)
                setIsLoading(true)
                cookie.set("REIGN_username", data.username, {
                    domain: "localhost",
                    expires: 1,
                })
                cookie.set("REIGN_firstName", data.firstName, {
                    domain: "localhost",
                    expires: 1,
                })
                cookie.set("REIGN_lastName", data.lastName, {
                    domain: "localhost",
                    expires: 1,
                })
                cookie.set("REIGN_loggedIn", true, {
                    domain: "localhost",
                    expires: 1,
                })
                setTimeout(() => {
                    router.push("/dashboards/executive-summary", null, { shallow: true })
                }, 5000)
            })
            .catch(e => {
                setError(true)
            })

    }

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
                    <form onSubmit={() => {
                        router.push("/dashboards/executive-summary", null, { shallow: true })
                    }}>
                        <input type={"text"} value={username} autoComplete={"current-username"} onChange={(event) => {
                            setUsername(event.target.value)
                        }}/>
                        <input type={"password"} value={password} autoComplete={"current-password"} onChange={(event) => {
                            setPassword(event.target.value)
                        }}/>
                        <button type={"submit"} >Log in
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}
