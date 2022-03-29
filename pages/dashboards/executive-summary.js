// components
import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer"

// charts
import Numeric from "../../components/dashboards/numeric"
import LineChart from "../../components/dashboards/line"
import BarChart from "../../components/dashboards/bar"
import GooglePieChart from "../../components/dashboards/GooglePieChart";

//styles
import styles from "./styles/Executive.module.scss"

export default function ExecutiveSummary(props) {
    return (
        <>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <link rel="icon" href="/public/favicon.ico"/>
                <title>Dashboards - Executive Overview</title>
            </Head>
            <ContentContainer>
                <div style={{display: "flex"}}>
                    <DashboardLayoutContainer>
                        <div>
                            <div className={styles.flexRow}>
                                <Numeric data={props.airtableNumeric.records}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.flexRow}>
                                <div className={styles.pieContainer}>
                                    <GooglePieChart label={"employees"} title={"performance/employee"} data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 6],
                                        ["5-6",14],
                                        ["6-7",19],
                                        ["7-8",45],
                                        ["8-9",51],
                                        ["9-10",11]
                                    ]}/>
                                </div>
                                <div className={styles.pieContainer}>
                                    <GooglePieChart label={"hours"} title={"training/keycard"} data={[
                                        ["Keycard", "Training hours"],
                                        ["Carpenter", 1103],
                                        ["Commercial Roofer",1034],
                                        ["Concrete",900],
                                        ["Flooring Installer",1672],
                                        ["General Laborer",783],
                                        ["Manufacturing",1209],
                                        ["HVAC",609],
                                        ["Painter",399],
                                        ["Residential Roofer",1478],
                                        ["Siding Installer",230]
                                    ]}/>
                                </div>
                            </div>
                            <div className={styles.flexRow}>
                                <div className={styles.pieContainer}>
                                    <GooglePieChart label={"employees"} title={"attendance/keycard"} data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 6],
                                        ["5-6",14],
                                        ["6-7",19],
                                        ["7-8",45],
                                        ["8-9",51],
                                        ["9-10",11]
                                    ]}/>
                                </div>
                                <div className={styles.pieContainer}>
                                    <GooglePieChart label={"late/no-show"} title={"attendance/keycard"} data={[
                                        ["Keycard", "Late employees"],
                                        ["Carpenter", 12],
                                        ["Commercial Roofer",5],
                                        ["Concrete",7],
                                        ["Flooring Installer",11],
                                        ["General Laborer",7],
                                        ["Manufacturing",4],
                                        ["HVAC",1],
                                        ["Painter",3],
                                        ["Residential Roofer",9],
                                        ["Siding Installer",6]
                                    ]}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.flexRow}>
                                <div className={styles.half}>
                                    <LineChart data={props.airtableLine.records}/>
                                </div>
                                <div className={styles.half}>
                                    <BarChart data={props.airtableBar}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                {/*<TreeMap data={props.airtableTree}/>*/}
                            </div>
                        </div>
                    </DashboardLayoutContainer></div>
            </ContentContainer>
        </>
    )
}

export async function getServerSideProps() {
    // set up variables
    const url = "https://api.airtable.com/v0/"
    const app = "apppbpS0rK10adQYh/"
    const key = "?api_key=keyYCtVdqu5KWRkCr&view="

    // fetch data
    const bar = await fetch(url + app + "Bars" + key + "ExecutiveSummary")
    const donuts = await fetch(url + app + "Donuts" + key + "ExecutiveSummary")
    const line = await fetch(url + app + "Lines" + key + "ExecutiveSummary")
    const numeric = await fetch(url + app + "Numerics" + key + "ExecutiveSummary")
    const tree = await fetch(url + app + "TreeMap" + key + "ExecutiveSummary")

    // cast data to json
    const airtableBar = await bar.json()
    const airtableDonuts = await donuts.json()
    const airtableLine = await line.json()
    const airtableNumeric = await numeric.json()
    const airtableTree = await tree.json()

    // return data as component props on render
    return {props: {airtableBar, airtableDonuts, airtableLine, airtableNumeric, airtableTree}}
}
