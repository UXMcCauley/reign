import styles from "./styles/VendorTile.module.scss"
import VendorTile from "./vendorTile";

export default function VendorGrid() {
    const vendors = [
        {img: "/partner-logos/15five.png", title: "15Five"},
        {img: "/partner-logos/adp.png", title: "ADP"},
        {img: "/partner-logos/ascentis.png", title: "Ascentis"},
        {img: "/partner-logos/ceridian.png", title: "Ceridian"},
        {img: "/partner-logos/employeenavigator.svg", title: "EmployeeId Navigator"},
        {img: "/partner-logos/freshteam.png", title: "Freshteam"},
        {img: "/partner-logos/gusto.png", title: "Gusto"},
        {img: "/partner-logos/hrmantra.png", title: "HR Mantra"},
        {img: "/partner-logos/kissflow.png", title: "Kissflow"},
        {img: "/partner-logos/kronos.jpeg", title: "Kronos"},
        {img: "/partner-logos/oracle.png", title: "Oracle"},
        {img: "/partner-logos/orangepay.png", title: "Orangepay"},
        {img: "/partner-logos/paychex.png", title: "Paychex"},
        {img: "/partner-logos/paycom.png", title: "Paycom"},
        {img: "/partner-logos/paycycle.png", title: "Paycycle"},
        {img: "/partner-logos/paylocity.jpeg", title: "Paylocity"},
        {img: "/partner-logos/quickbooks.png", title: "Quickbooks"},
        {img: "/partner-logos/sage.png", title: "Sage"},
        {img: "/partner-logos/sap.png", title: "SAP"},
        {img: "/partner-logos/surepayroll.png", title: "Surepayroll"},
        {img: "/partner-logos/tsheets.jpg", title: "T Sheets"},
        {img: "/partner-logos/wave.png", title: "Wave"},
        {img: "/partner-logos/workday.png", title: "Workday"},
        {img: "/partner-logos/zoho.png", title: "Zoho"},
    ]
    return (
        <div className={styles.gridContainer}>
            <h1>Please select your preferred payroll vendor for export options.</h1>
            {
                vendors.map((vendor, i) => {
                    return <VendorTile key={i} img={vendor.img} title={vendor.title}/>
                })
            }
        </div>
    )
}
