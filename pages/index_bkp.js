import Head from "next/head";
import ContentContainer from "../components/universal/ContentContainer";
import DashboardLinks from "../components/dashboards/DashboardLinks";
import DashPreview from "../components/dashboards/DashPreview";
import ActionBadge from "../components/universal/ActionBadge";
import {PrimaryButton} from "../components/ui/Buttons";
import Link from "next/link"
import styles from "/styles/Home.module.scss"

export default function Home() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Activity</title>
                <meta name="description" content="Dashboards"/>
            </Head>
            <ContentContainer>
                <DashboardLinks/>
                <div style={{display: "flex"}}>
                    <div className={styles.left}>
                        <div className={styles.section}>
                            <div className={styles.title}>
                                <div className={styles.text}>Starred Dashboards</div>
                                {/*<PrimaryButton color={"pink"} label={"Add dashboard"} icon={"Plus"}/>*/}
                            </div>
                            <div className={styles.grid}>
                                <DashPreview label={"Executive Summary"} link={"/dashboards/executive-summary"}
                                             active={true}/>
                                <DashPreview label={"Employee Performance"} link={"/dashboards/employee-performance"}
                                             active={true}/>
                                <DashPreview label={"Workforce Diversity"} link={"/dashboards/workforce-diversity"}
                                             active={true}/>

                            </div>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.title}>
                                <div className={styles.text}>All Dashboards</div>
                            </div>
                            <div>
                                <DashPreview label={"Executive Summary"} link={"/dashboards/executive-summary"}/>
                                <DashPreview label={"Employee Performance"} link={"/dashboards/employee-performance"}/>
                                <DashPreview label={"Workforce Diversity"} link={"/dashboards/workforce-diversity"}/>
                                <DashPreview label={"Salary Overview"} link={"/dashboards/salary-overview"}/>
                                <DashPreview label={"Project Dynamics"} link={"/dashboards/project-dynamics"}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>
                            <div className={styles.text}>Actions</div>

                        </div>
                        <ActionBadge label={"Timecard approvals"} number={33}/>
                        <ActionBadge label={"Unread messages"} number={5}/>
                        <ActionBadge label={"Annual revues due"} number={11}/>
                        <div className={styles.spacer}/>
                        <div className={styles.title}>
                            <div className={styles.text}>Functions</div>
                        </div>
                        <div className={styles.link}>
                            <Link href={"/dashboards/workforce-diversity"} passHref>
                            <a>
                                Inequity Gap Finder Tool
                            </a>
                        </Link>
                        </div>
                        <div className={styles.link}>
                        <Link href={"/employees/compare"} passHref>
                            <a>
                                Employee Performance Comparison Tool
                            </a>
                        </Link>
                        </div>
                        <div className={styles.link}>
                        <Link href={"/teams/compare"} passHref>
                            <a>
                                Team Performance Comparison Tool
                            </a>
                        </Link>
                        </div>
                        <div className={styles.link}>
                        <Link href={"/data"} passHref>
                            <a>
                                Payroll Data Export
                            </a>
                        </Link>
                        </div>
                        <div className={styles.link}>
                        <Link href={"/employees/add-employee"} passHref>
                            <a>
                                Add an employee
                            </a>
                        </Link>
                        </div>
                        <div className={styles.link}>
                        <Link href={"/teams/create"} passHref>
                            <a>
                                Build a team
                            </a>
                        </Link>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}
