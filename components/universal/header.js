import Logo from "./ui/logo"
import NotificationBell from "./ui/notificationBell"
import styles from "./styles/Header.module.scss"

export default function Header() {
    return (
        <div className={styles.container}>
            <Logo/>
            <NotificationBell alert={false}/>
        </div>
    )
}
