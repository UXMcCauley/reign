import styles from "./styles/DashboardLayoutContainer.module.scss"

export default function DashboardLayoutContainer({children}) {

    return (
        <div className={styles.container}>
            {/*<DashboardLinks/>*/}
            <div className={styles.contentContainer}>
                {children}
            </div>
        </div>
    )
}
