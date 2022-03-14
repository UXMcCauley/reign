import styles from "./styles/TimecardApprovalItem.module.scss"
import moment from "moment";

export default function TimecardApprovalItem({item}) {
    const startTime = new Date(item.start).getHours()
    const endTime = new Date(item.end).getHours()
    const workDate = moment(item.start).format("dddd, MMMM Do YYYY").toString()

    const hours = endTime - startTime
    return (
        <div className={styles.item}>
            <div className={styles.avatar}>
            </div>
            <div className={styles.rightContent}>
                <strong>{item.employeeName}</strong>
                <span style={{margin: "0 10px", color: "#6f6f6f"}}>|</span>
                <span className={styles.title}>{hours} hours</span>
                <span style={{margin: "0 10px", color: "#6f6f6f"}}>|</span>
                <span className={styles.lightGray}>{item.punches.length} tasks</span>
                <span style={{margin: "0 10px", color: "#6f6f6f"}}>|</span>
                <span className={styles.lightGray}>{workDate}</span>
            </div>
        </div>
    )
}
