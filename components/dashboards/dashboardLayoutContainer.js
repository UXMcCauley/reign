import styles from "./styles/DashboardLayoutContainer.module.scss"
import Link from "next/link"
import {useRouter} from "next/router";
import DashboardStatusLine from "./dashboardStatusLine";

export default function DashboardLayoutContainer({children}) {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <DashboardStatusLine/>
            <div className={styles.links}>
                <div
                    className={`${styles.link} ${router.pathname === "/dashboards/executive" ? styles.active : null}`}>
                    <Link href={"/dashboards/executive"}>Executive Overview</Link>
                </div>
                <div
                    className={`${styles.link} ${router.pathname === "/dashboards/employee-performance" ? styles.active : null}`}>
                    <Link href={"/dashboards/employee-performance"}>Employee Performance</Link>
                </div>
                <div
                    className={`${styles.link} ${router.pathname === "/dashboards/employee-development" ? styles.active : null}`}>
                    <Link href={"/dashboards/employee-development"}>Employee Development</Link>
                </div>
                <div
                    className={`${styles.link} ${router.pathname === "/dashboards/workforce-diversity" ? styles.active : null}`}>
                    <Link href={"/dashboards/workforce-diversity"}>Workforce Diversity</Link>
                </div>
                <div
                    className={`${styles.link} ${router.pathname === "/dashboards/salary-overview" ? styles.active : null}`}>
                    <Link href={"/dashboards/salary-overview"}>Salary Overview</Link>
                </div>
                <div
                    className={`${styles.link} ${router.pathname === "/dashboards/group-dynamics" ? styles.active : null}`}>
                    <Link href={"/dashboards/group-dynamics"}>Group Dynamics</Link>
                </div>
            </div>

            <div>{children}</div>
        </div>
    )
}