import styles from "./styles/Buttons.module.scss"
import Link from "next/link"
import {useRouter} from "next/router"

export default function DashboardMenuButton(props){
    const router = useRouter()
    const link = props.link || null
    return (
        <Link href={link}>
            <button className={`${styles.dashboardMenuButton} ${router.pathname === props.link ? styles.active : ''}`}>{props.label}</button>
        </Link>
    )
}