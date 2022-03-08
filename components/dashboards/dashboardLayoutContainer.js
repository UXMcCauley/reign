import styles from "./styles/DashboardLayoutContainer.module.scss"
import DashboardStatusLine from "./dashboardStatusLine";
import DashboardLinks from "./DashboardLinks";

export default function DashboardLayoutContainer({children}) {

    return (
        <div className={styles.container}>
            <DashboardStatusLine/>
            <DashboardLinks/>
            <div className={styles.contentContainer}>{children}</div>
        </div>
    )
}
