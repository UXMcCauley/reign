import Logo from "./logo"
import NotificationBell from "./notificationBell"
import CurrentUser from "./currentUser"
import styles from "./styles/Header.module.scss"

export default function Header() {
    return (
        <div className={styles.container}>
            <Logo/>
            <div className={styles.links}>
                <NotificationBell alert={false}/>
                <CurrentUser/>
            </div>
        </div>
    )
}