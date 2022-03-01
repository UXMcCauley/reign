import Link from "next/link"
import styles from "./styles/DashboardContentContainer.module.scss"
import {useRouter} from "next/router";
import DashboardStatusLine from "./dashboardStatusLine";

export default function DashboardContentContainer({children}) {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.bottomLine}>
                <div className={`${styles.link} ${router.pathname === "/dashboards/executive" ? styles.active : null}`}>
                    <Link href={"/dashboards/executive"} passHref>
                        <div>Executive Overview</div>
                    </Link>
                </div>
                <div className={`${styles.link} ${router.pathname === "/dashboards/employee-performance" ? styles.active : null}`}>
                    <Link href={"/dashboards/employee-performance"} passHref>
                        <div>Employee Performance</div>
                    </Link>
                </div>
                <div className={`${styles.link} ${router.pathname === "/dashboards/employee-development" ? styles.active : null}`}>
                    <Link href={"/dashboards/employee-development"} passHref>
                        <div>Employee Development</div>
                    </Link>
                </div>
                <div className={`${styles.link} ${router.pathname === "/dashboards/workforce-diversity" ? styles.active : null}`}>
                    <Link href={"/dashboards/workforce-diversity"} passHref>
                        <div>Workforce Diversity</div>
                    </Link>
                </div>
                <div className={`${styles.link} ${router.pathname === "/dashboards/salary-overview" ? styles.active : null}`}>
                    <Link href={"/dashboards/salary-overview"} passHref>
                        <div>Salary Overview</div>
                    </Link>
                </div>
            </div>
            <DashboardStatusLine/>
            <div>
                {children}
            </div>
        </div>
    )
}