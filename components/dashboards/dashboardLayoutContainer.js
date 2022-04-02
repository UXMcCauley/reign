import DashboardLinks from "./DashboardLinks";

export default function DashboardLayoutContainer({children}) {
    return (
        <div className={"dashboardContainer"}>
            <DashboardLinks/>
            <div className={"contentContainer"}>
                {children}
            </div>
        </div>
    )
}
