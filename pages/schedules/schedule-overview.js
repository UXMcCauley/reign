import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"

import styles from "./styles/ScheduleOverview.module.scss"
import {useState} from "react";

export default function ScheduleOverview() {
    const [open, setOpen] = useState(false)
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [shifts, setShifts] = useState([
        {employee: "Dave Johnson", blocks: {start: "start", end: "end"}},
        {employee: "Alan Davis", start: "start", end: "end"},
        {employee: "Pete Keller", start: "start", end: "end"}
    ])

    const gridItems = ["1am", "2am", "3am", "4am", "5am", "6am", "6am", "7am", "8am", "9am", "10am", "11am",
        "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am"]

    const BlockHighlighter = (props) => {
        const startTime = new Date(props.start).getHours()
        const endTime = new Date(props.end).getHours()
        return (
            <div style={{
                position: "absolute",
                top: props.idx*40,
                left: startTime * 50,
                width: (endTime - startTime) * 50,
                backgroundColor: "rgba(22,110,235,0.37)",
                padding: 5,
                display: "flex",
                justifyContent: "space-between",
                borderRadius:30
            }}>
                <div style={{backgroundColor: "rgba(22,110,235,1)", width: 30, height:30, borderRadius: 30}}/>
                <div style={{backgroundColor: "rgba(22,110,235,1)", width: 30, height:30, borderRadius: 30}}/>

            </div>
        )
    }

    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="Schedules"/>
            </Head>
            <ContentContainer>
                <div className={styles.container}>

                    <div className={styles.scheduleContainer}>
                        <div className={styles.left}>
                            <div className={styles.header}>
                                <input type={"datetime-local"} onChange={(event) => {
                                    setStart(event.target.value)
                                }}/>
                                <input type={"datetime-local"} onChange={(event) => {
                                    setEnd(event.target.value)
                                }}/>
                            </div>
                            <div className={styles.under}>
                                {shifts.map((shift, i) => {
                                    return (
                                        <div key={i} className={styles.employeeNameBlock}>
                                            <span>{shift.employee}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.header}>
                                Controls
                            </div>
                            <div className={styles.under}>
                                <div className={styles.calendarContainer}>
                                    {gridItems.map((item, i) => {
                                        return <div key={i} className={styles.gridColumn}>
                                            <div className={styles.gridColumnLabel}>{item}
                                            </div>
                                        </div>
                                    })}
                                </div>
                                <div className={styles.calendarOverlay}>
                                    {start === "" || end === "" ? null : <BlockHighlighter start={start} end={end} idx={2}/>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.flyin} ${open === true ? styles.open : null}`}>

                    </div>
                </div>

            </ContentContainer>
        </>
    )
}
