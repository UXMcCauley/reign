import {useState} from "react"
import {useRouter} from "next/router"

// my component imports
import {PrimaryButton} from "./ui/Buttons"
import Logo from "./ui/logo"
import NotificationBell from "./ui/notificationBell"


import styles from "./styles/Header.module.scss"

export default function Header() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [initials, setInitials] = useState("AM")
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
                    <PrimaryButton label={"Log out"} color={"pink"} action={() => {router.push("/sign-in")}} icon={"LogOut"}/>
                </div>
            </div>
        </div>
    )
}
