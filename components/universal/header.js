import Logo from "./ui/logo"
import NotificationBell from "./ui/notificationBell"
import styles from "./styles/Header.module.scss"
import {useRouter} from "next/router";
import {useState} from "react";

export default function Header() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [initials, setInitials] = useState("AM")
    // const cookie = useCookie()
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.rightModule}><NotificationBell alert={false}/>
                <div className={styles.avatar}>
                    {initials}
                </div>
                <div className={styles.username}>
                    {firstName} {lastName}
                </div>
                <div className={styles.button}>
                    <button onClick={() => {
                        router.push("/sign-in")
                    }}>Log out
                    </button>
                </div>
            </div>
        </div>
    )
}
