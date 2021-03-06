import {Gauge, Person, ListBullets, Key, Calendar, Database, Gear, Question} from "phosphor-react"
import styles from "./styles/VerticalIconMenu.module.scss"
import Link from "next/link"
import {useRouter} from "next/router";

export default function VerticalIconMenu(props) {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <div className={`${styles.link} ${router.pathname === "/dashboards/executive" ? styles.active : ''}`}>
                <Link href={"/dashboards/executive"} passHref>
                    <div>
                        <Gauge size={props.size}/>
                        <div className={styles.label}>Dashboards</div>
                    </div>
                </Link>
            </div>
            <div className={`${styles.link} ${router.pathname === "/" ? styles.active : ''}`}>
                <Link href={"/"} passHref>
                    <div>
                        <ListBullets size={props.size}/>
                        <div className={styles.label}>Feed</div>
                    </div>
                </Link>
            </div>
            <div className={`${styles.link} ${router.pathname === "/employees" ? styles.active : ''}`}>
                <Link href={"/employees"} passHref>
                    <div><Person size={props.size}/>
                        <div className={styles.label}>Employees</div>
                    </div>
                </Link>
            </div>
            <div className={`${styles.link} ${router.pathname === "/keycards" ? styles.active : ''}`}>
                <Link href={"/keycards"} passHref>
                    <div><Key size={props.size}/>
                        <div className={styles.label}>Keycards</div>
                    </div>
                </Link>
            </div>
            <div className={`${styles.link} ${router.pathname === "/schedules" ? styles.active : ''}`}>
                <Link href={"/schedules"} passHref>
                    <div><Calendar size={props.size}/>
                        <div className={styles.label}>Schedules</div>
                    </div>
                </Link>
            </div>
            <div className={`${styles.link} ${router.pathname === "/data" ? styles.active : ''}`}>
                <Link href={"/data"} passHref>
                    <div><Database size={props.size}/>
                        <div className={styles.label}>Data</div>
                    </div>
                </Link>
            </div>
            <div className={`${styles.link} ${router.pathname === "/settings" ? styles.active : ''}`}>
                <Link href={"/settings"} passHref>
                    <div><Gear size={props.size}/>
                        <div className={styles.label}>Settings</div>
                    </div>
                </Link>
            </div>
            <div className={`${styles.link} ${router.pathname === "/help" ? styles.active : ''}`}>
                <Link href={"/help"} passHref>
                    <div><Question size={props.size}/>
                        <div className={styles.label}>Help Center</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}