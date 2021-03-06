import {Bell, BellRinging} from "phosphor-react"
import styles from "./styles/NotoficationBell.module.scss"

export default function NotificationBell(props) {
    return (
        <div className={styles.notificationBell}>
            {props.alert ? <BellRinging size={32} weight={"fill"} color={"yellow"}/> : <Bell size={32}/>}
        </div>
    )
}