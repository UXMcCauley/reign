import Head from 'next/head'
import ContentContainer from "../components/universal/layout"
import TimecardApprovalItem from "../components/timecards/TimecardApprovalItem";
import styles from "../styles/Timecards.module.scss"
import TimecardDetails from "../components/timecards/TimecardDetails";

const timecards = [
    {name: "James Mercer", title: "Level 1 HVAC", project: "Archdiocese of Milwaukee Project", hours: 8},
    {name: "Christopher Ellison", title: "Level 2 Cement", project: "Archdiocese of Milwaukee Project", hours: 8},
    {name: "Angelo Rodriguez", title: "Level 2 Framing", project: "Archdiocese of Milwaukee Project", hours: 10.5},
    {name: "name", title: "title", project: "Archdiocese of Milwaukee Project", hours: 9},
    {name: "name", title: "title", project: "Archdiocese of Milwaukee Project", hours: 8.25}
]

export default function Timecards() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Activity</title>
                <meta name="description" content="Activity Feed and News"/>
            </Head>
            <ContentContainer>
                <div className={styles.container}>
                    <div className={styles.flexChild}>
                        {timecards.map((item, i) => {
                            return <TimecardApprovalItem key={i} item={item}/>
                        })}
                    </div>
                    <TimecardDetails/>
                </div>

            </ContentContainer>
        </>
    )
}

