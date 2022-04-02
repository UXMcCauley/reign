import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

function DashboardLinks() {
    const router = useRouter()
    return (
        <div className={"dashboardLinks"}>
            <div
                className={`link ${router.pathname === "/dashboards/executive-summary" ? "active" : null}`}>
                <Link href={"/dashboards/executive-summary"}>Executive Summary</Link>
            </div>
            <div
                className={`link ${router.pathname === "/dashboards/employee-performance" ? "active" : null}`}>
                <Link href={"/dashboards/employee-performance"}>Employee Performance</Link>
            </div>
            <div
                className={`link ${router.pathname === "/dashboards/workforce-diversity" ? "active" : null}`}>
                <Link href={"/dashboards/workforce-diversity"}>Workforce Diversity</Link>
            </div>
            <div
                className={`link ${router.pathname === "/dashboards/salary-overview" ? "active" : null}`}>
                <Link href={"/dashboards/salary-overview"}>Salary Overview</Link>
            </div>
            <div
                className={`link ${router.pathname === "/dashboards/project-dynamics" ? "active" : null}`}>
                <Link href={"/dashboards/project-dynamics"}>Project Dynamics</Link>
            </div>
        </div>
    );
}

export default DashboardLinks;
