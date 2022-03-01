import Logo from "./logo"
import NotificationBell from "./notificationBell"
import CurrentUser from "./currentUser"
import styles from "./styles/Header.module.scss"
import NavigationLink from "./navigationLink";

export default function Header() {
    const links = [
        {label: "Feed", link: "/", notification: true},
        {label: "Dashboards", link: "/dashboards/executive", notification: false},
        {label: "Employees", link: "/employees", notification: false},
        {label: "Keycards", link: "/keycards", notification: false},
        {label: "Schedules", link: "/schedules", notification: false},
        {label: "Data", link: "/data", notification: false},
        {label: "Settings", link: "/settings", notification: false},
        {label: "Help", link: "/help", notification: false},
    ]
    return (
        <>
            <div>
                <div className={styles.topHeader}>
                    <Logo/>
                    <div className={styles.linksContainer}>
                        {
                            links.map((link, key) => {
                                return (
                                    <NavigationLink key={key} link={link.link} label={link.label} alert={link.notification} />
                                )
                            })
                        }
                    </div>
                </div>

            </div>
            <div className={styles.bottomHeader}>
                <CurrentUser/>
                <NotificationBell alert={false}/>
            </div>
        </>
    )
}