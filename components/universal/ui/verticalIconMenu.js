import styles from "./styles/VerticalIconMenu.module.scss"
import Link from "next/link"
import {useRouter} from "next/router";

const LINKS = [
    {path: "/dashboards", label: "Dashboards", color: 'rgba(225, 33, 98, 0.2)'},
    {path: "/messages", label: "Messages", color: 'rgba(85, 40, 171, 0.5)'},
    {path: "/", label: "Feed", color: 'rgba(40, 43, 171, 0.2)'},
    {path: "/keycards", label: "Keycards", color: 'rgba(188, 26, 90, 0.2)'},
    {path: "/schedules", label: "Schedules", color: 'rgba(152, 41, 171, 0.2)'},
    {path: "/employees", label: "Employees", color: 'rgba(39, 105, 170, 0.2)'},
    {path: "/settings", label: "Settings", color: 'rgba(86, 213, 184, 0.2)'},
    {path: "/help", label: "Help Center", color: 'rgba(96, 193, 134, 0.2)'},
]

export default function VerticalIconMenu() {
    const router = useRouter()
    return (
        <div className={styles.container}>
            {LINKS.map((link, i) => {
                return (
                    <div key={i}
                         style={{backgroundColor:` ${router.pathname.split("/")[1] === link.path.split("/")[1] ? link.color : null}`}}
                         className={`${styles.link} ${router.pathname === link.path ? styles.active : ''}`}>
                        <Link href={link.path} passHref>
                            <div>
                                <div className={styles.label}>{link.label}</div>
                            </div>
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}
