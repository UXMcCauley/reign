import React from 'react';
import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link"

import styles from "./styles/MainNavigation.module.scss"

let USE_SUB_LINKS = []

const MAIN_LINKS = [
    {path: "/dashboards/executive-summary", label: "Dashboards"},
    {path: "/messages/view-messages", label: "Messages"},
    {path: "/timecards", label: "Timecards"},
    {path: "/employees/all-employees", label: "Employees"},
    {path: "/keycards/all-keycards", label: "Keycards"},
    {path: "/schedules/schedule-overview", label: "Schedules"},
    {path: "/settings", label: "Settings"},
    {path: "/help/faq", label: "Help Center"},
]

const DASHBOARD_LINKS = [
    {path: "/dashboards/executive-summary", label: "Executive Summary"},
    {path: "/dashboards/employee-performance", label: "EmployeeId Performance"},
    {path: "/dashboards/employee-development", label: "EmployeeId Development"},
    {path: "/dashboards/workforce-diversity", label: "Workforce Diversity"},
    {path: "/dashboards/salary-overview", label: "Salary Overview"},
    {path: "/dashboards/project-dynamics", label: "Project Dynamics"}
]

const KEYCARD_LINKS = [
    {path: "/keycards/all-keycards", label: "View keycards"},
    {path: "/keycards/add-new-keycard", label: "Add a keycard"},
    {path: "/keycards/tasks", label: "Add tasks to keycard"},
]

// const TIMECARD_LINKS = [
//     {path: "/keycards/all-keycards", label: "Timecard approval"},
//     {path: "/keycards/add-new-keycard", label: "View approved timecards"},
//     {path: "/keycards/tasks", label: "View rejected timecards"},
//     {path: "/keycards/tasks", label: "View flagged timecards"},
// ]

const SCHEDULE_LINKS = [
    {path: "/schedules/schedule-overview", label: "View schedules"},
    {path: "/schedules/add-schedules", label: "Add a schedule"},
    {path: "/schedules/bulk-import-schedules", label: "Bulk import schedules"},
]

const EMPLOYEE_LINKS = [
    {path: "/employees/all-employees", label: "View employees"},
    {path: "/employees/add-employee", label: "Add an employee"},
    {path: "/employees/bulk-import-employees", label: "Bulk import employees"},
]

const HELP_LINKS = [
    {path: "/help/faq", label: "FAQ"},
    {path: "/help/video-tutorials", label: "Tutorial Videos"},
    {path: "/help/submit-request-form", label: "Submit Request Form"},
]

function MainNavigation() {
    const router = useRouter()
    if (router.pathname.length > 1) {
        if (router.pathname.indexOf("dashboards") > -1) {
            USE_SUB_LINKS = DASHBOARD_LINKS
        } else if (router.pathname.indexOf("employees") > -1) {
            USE_SUB_LINKS = EMPLOYEE_LINKS
        } else if (router.pathname.indexOf("keycards") > -1) {
            USE_SUB_LINKS = KEYCARD_LINKS
        } else if (router.pathname.indexOf("schedules") > -1) {
            USE_SUB_LINKS = SCHEDULE_LINKS
        } else if (router.pathname.indexOf("help") > -1) {
            USE_SUB_LINKS = HELP_LINKS
        } else {
            USE_SUB_LINKS = []
        }
    }

    // set menu state -open/close
    const [menuOpen, setMenuOpen] = useState(true)
    // make JSX for submenu
    const makeSubNav = (value) => {
        return (
            <div className={styles.subMenu}>
                {value.map((link, i) => {
                    return (
                        <Link key={i} href={link.path} passHref>
                            <div className={styles.link}>{link.label}</div>
                        </Link>
                    )
                })}
            </div>
        )
    }

    // return all menu items and container
    return (
        <div>
            <div className={`${styles.container} 
                ${USE_SUB_LINKS.length > 0 ? styles.hasSub : styles.hasNoSub}
                ${!menuOpen ? styles.closed : null}
                `}>
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
                {MAIN_LINKS.length > -1 ? makeSubNav(USE_SUB_LINKS) : null}

            </div>
        </div>
    );
}

export default MainNavigation;
