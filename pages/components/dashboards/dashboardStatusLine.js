import styles from "./styles/DashboardStatusLine.module.scss"

export default function DashboardStatusLine(){
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div>
                    <strong>Last updated:</strong> Today at 4:51AM
                </div>
                <div className={styles.refreshLink}>Refresh data</div>
                <div>
                    <strong>Data sources:</strong> <span className={styles.connected}>Connected</span>
                </div>
            </div>
            <div className={styles.right}>
                <div>Edit Icon</div>
                <div className={styles.editLayout}>Edit layout</div>
            </div>
        </div>
    )
}