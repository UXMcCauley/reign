import Logo from "./ui/logo"
import NotificationBell from "./ui/notificationBell"
import styles from "./styles/Header.module.scss"
import {useCookie} from "next-cookie";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Header() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [initials, setInitials] = useState("")
    const cookie = useCookie()
    const router = useRouter()
    useEffect(() => {
        setFirstName(cookie.get("firstName"))
        setLastName(cookie.get("lastName"))
        // setInitials(firstName.split("")[0] + "" + lastName.split("")[0])
    }, [])
    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.rightModule}><NotificationBell alert={false}/>
                <div className={styles.avatar}>
                    {/*{initials}*/}
                </div>
                <div className={styles.username}>
                    {firstName} {lastName}
                </div>
                <div className={styles.button}>
                    <button onClick={() => {
                        cookie.remove("REIGN_username")
                        cookie.remove("REIGN_firstName")
                        cookie.remove("REIGN_lastName")
                        cookie.remove("REIGN_loggedIn")
                        router.push("/sign-in")
                    }}>Log out
                    </button>
                </div>
            </div>
        </div>
    )
}
