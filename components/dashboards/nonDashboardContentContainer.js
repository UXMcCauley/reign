import styles from "./styles/DashboardContentContainer.module.scss"

export default function NonDashboardContentContainer({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}