import styles from "./styles/DashboardLayoutContainer.module.scss"
import DashboardLinks from "./DashboardLinks";
export default function DashboardLayoutContainer({children}) {

    return (
        <div className={styles.container}>
            <DashboardLinks/>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </div>
    )
}
