import React from 'react';
import styles from "./styles/DashboardLinks.module.scss"
import Link from "next/link";
import {useRouter} from "next/router";

function DashboardLinks() {
    const router = useRouter()
    return (
        <div className={styles.links}>
            <div
                className={`${styles.link} ${router.pathname === "/dashboards/executive-summary" ? styles.active : null}`}>
                <Link href={"/dashboards/executive-summary"}>Executive Summary</Link>
            </div>
            <div
                className={`${styles.link} ${router.pathname === "/dashboards/employee-performance" ? styles.active : null}`}>
                <Link href={"/dashboards/employee-performance"}>Employee Performance</Link>
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
                className={`${styles.link} ${router.pathname === "/dashboards/project-dynamics" ? styles.active : null}`}>
                <Link href={"/dashboards/project-dynamics"}>Project Dynamics</Link>
            </div>
        </div>
    );
}

export default DashboardLinks;
