import DashboardMenuButton from "../universal/ui/dashboardMenuButton"
import styles from "./styles/DashboardMenu.module.css"

export default function DashboardMenu() {
    const buttons = [
        {label: "executive", link: "/dashboards/executive", active: true},
        {label: "employee performance", link: "/dashboards/employee-performance", active: false},
        {label: "employee development", link: "/dashboards/employee-development", active: false},
        {label: "workforce diversity", link: "/dashboards/workforce-diversity", active: false},
        {label: "salary overview", link: "/dashboards/salary-overview", active: false},
    ]
    return (
        <div className={styles.container}>
            {
                buttons.map((button, i) => {
                    return <DashboardMenuButton key={i} label={button.label} link={button.link} active={button.active}/>
                })
            }

        </div>
    )
}