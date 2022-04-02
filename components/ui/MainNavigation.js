import {useRouter} from "next/router";
import Link from "next/link"

import styles from "./styles/MainNavigation.module.scss"

const MAIN_LINKS = [
    {path: "/", label: "Home"},
    {path: "/messages/view-messages", label: "Messages"},
    {path: "/employees/all-employees", label: "Employees"},
    {path: "/teams", label: "Teams"},
    {path: "/projects", label: "Projects"},
    {path: "/timecards", label: "Timecards"},
    {path: "/keycards/all-keycards", label: "Keycards"},
    {path: "/schedules/schedule-overview", label: "Schedules"},
    {path: "/settings", label: "Settings"},
    {path: "/help", label: "Help Center"},
]

const DASHBOARD_LINKS = [
    {path: "/dashboards/executive-summary", label: "Executive Summary"},
    {path: "/dashboards/employee-performance", label: "Employee Performance"},
    {path: "/dashboards/workforce-diversity", label: "Workforce Diversity"},
    {path: "/dashboards/salary-overview", label: "Salary Overview"},
    {path: "/dashboards/project-dynamics", label: "Project Dynamics"}
]

function MainNavigation() {
const router = useRouter()
    // return all menu items and container
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.mainMenu}>
                    {MAIN_LINKS.map((link, i) => {
                        return (
                            <Link key={i} passHref href={link.path}>
                                <div
                                    className={`${styles.link} ${router.pathname
                                        .replace("/")
                                        .indexOf(link.path.replace("/")) > -1 ? styles.active : null}`}>{link.label}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;
