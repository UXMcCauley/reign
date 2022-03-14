import Head from 'next/head'
import ContentContainer from "../components/universal/layout"
import TimecardApprovalItem from "../components/timecards/TimecardApprovalItem";
import styles from "../styles/Timecards.module.scss"
import TimecardDetails from "../components/timecards/TimecardDetails";
import {useState, useEffect} from "react";
import absoluteUrl from 'next-absolute-url'

export default function Timecards() {
    const [allShifts, setAllShifts] = useState([])
    const [currentShift, setCurrentShift] = useState({
        _id: "",
        employeeName: "Loading...",
        punches: []
    })

    const getActiveEmployee = async (id) => {
        // fetch employee timecard data after click
        const {origin} = absoluteUrl()
        const apiURL = `${origin}/api/one/employee?employeeId=${id}`
        const data = await fetch(apiURL)
        data.json()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const getAllShifts = async (organizationId) => {
        // fetch employee timecard data after click
        const {origin} = absoluteUrl()
        const apiURL = `${origin}/api/all/shifts?organizationId=${organizationId}`
        const data = await fetch(apiURL)
        data.json()
            .then(res => {
                setAllShifts(res)
                setCurrentShift(res[0])
            })
            .catch(err => console.log(err))
    }

    const approveTimecard = () => {
        // set timecard to approved in db
    }
    useEffect(() => {
        getAllShifts("61bf60ecddd910d9c0a18df1")

    }, [])

    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Activity</title>
                <meta name="description" content="Activity Feed and News"/>
            </Head>
            <ContentContainer>
                <div className={styles.container}>
                    <div className={styles.flexChild}>
                        <div className={styles.pageTitle}>
                            <div className={styles.pageTitleText}>Timecard Approval</div>
                            <div className={styles.titleBarLink}>Needs Approval</div>
                            <div className={styles.titleBarLink}>Approved</div>
                            <div className={styles.titleBarLink}>Edited</div>
                            <div className={styles.titleBarLink}>Rejected</div>
                        </div>
                        {allShifts.map((item) => {
                            return (
                                <div key={item._id} onClick={() => {
                                    getActiveEmployee(item._id)
                                    setCurrentShift(item)
                                }}>
                                    <TimecardApprovalItem item={item}/>
                                </div>
                            )
                        })}
                    </div>
                    <TimecardDetails timecard={currentShift}/>
                </div>

            </ContentContainer>
        </>
    )
}

