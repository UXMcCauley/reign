import styles from "./styles/Buttons.module.scss"
import Link from "next/link"
import {useRouter} from "next/router"

export default function DashboardMenuButton(props){
    const router = useRouter()
    return (
        <Link href={props.link}>
            <button className={`${styles.dashboardMenuButton} ${router.pathname === props.link ? styles.active : ''}`}>{props.label}</button>
        </Link>
    )
}