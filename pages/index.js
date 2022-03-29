import Head from "next/head";
import ContentContainer from "../components/universal/layout";
import styles from "/styles/Home.module.scss"
import DashboardLinks from "../components/dashboards/DashboardLinks";
import {PrimaryButton} from "../components/universal/ui/Buttons";
import DashPreview from "../components/dashboards/DashPreview";
import ActionBadge from "../components/universal/ActionBadge";

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
                                <PrimaryButton color={"pink"} label={"Add dashboard"} icon={"Plus"}/>
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
                        <div className={styles.title}>
                            <div className={styles.text}>Functions</div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}
