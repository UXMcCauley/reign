import Logo from "./logo"
import NotificationBell from "./notificationBell"
import styles from "./styles/Header.module.scss"

export default function Header() {
    return (
        <div className={styles.bottomHeader}>
            <Logo/>
            <NotificationBell alert={false}/>
        </div>
    )
}