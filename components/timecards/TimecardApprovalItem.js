import styles from "./styles/TimecardApprovalItem.module.scss"



export default function TimecardApprovalItem({item}) {
    return (
        <div className={styles.item}>
            <div className={styles.avatar}>

            </div>
            <div className={styles.rightContent}>
                <strong>{item.name}</strong>
                <span style={{margin: "0 10px"}}>|</span>
                <span className={styles.title}>{item.title}</span>
                <span style={{margin: "0 10px"}}>|</span>
                <span className={styles.lightGray}>{item.project}</span>
            </div>
            <div>
                <span className={styles.hours}>{item.hours}h</span>
            </div>
        </div>
    )
}
