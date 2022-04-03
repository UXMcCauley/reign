// components
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import TopMetric from "../../components/dashboards/TopMetric";

// charts
import LineChart from "../../components/dashboards/line"
import BarChart from "../../components/dashboards/bar"
import GooglePieChart from "../../components/dashboards/GooglePieChart";

//styles
import styles from "./styles/Executive.module.scss"

export default function ExecutiveSummary(props) {
    return (
        <>
            <SingleColumnLayout>
                <Heading label={"Executive Summary"}/>
                <div className={" flex justify-between w-full flex-row columns-6 items-start"}>
                    <TopMetric value={20021} title={"employees"} subtitle={""} options={[]}/>
                    <TopMetric value={17324} title={"training hours"} subtitle={"total"} options={["Year", "Quarter", "Month"]}/>
                    <TopMetric value={347212} title={"production hours"} subtitle={"total"} options={["Year", "Quarter", "Month"]}/>
                    <TopMetric value={1904658} title={"payroll average"} subtitle={"total"} options={["Year", "Quarter", "Month"]}/>
                    <TopMetric value={399} title={"new hires"} subtitle={"total"} options={["Year", "Quarter", "Month"]}/>
                    <TopMetric value={7446} title={"raises"} subtitle={"total"} options={["Year", "Quarter", "Month"]}/>
                </div>
                <div>
                    <div className={`flex justify-between`}>
                        <GooglePieChart label={"employees"} title={"performance/employee"} data={[
                            ["Rating", "Number of employees"],
                            ["<5", 6],
                            ["5-6", 14],
                            ["6-7", 19],
                            ["7-8", 45],
                            ["8-9", 51],
                            ["9-10", 11]
                        ]}/>

                        <GooglePieChart label={"hours"} title={"training/keycard"} data={[
                            ["Keycard", "Training hours"],
                            ["Carpenter", 1103],
                            ["Commercial Roofer", 1034],
                            ["Concrete", 900],
                            ["Flooring Installer", 1672],
                            ["General Laborer", 783],
                            ["Manufacturing", 1209],
                            ["HVAC", 609],
                            ["Painter", 399],
                            ["Residential Roofer", 1478],
                            ["Siding Installer", 230]
                        ]}/>

                        <GooglePieChart label={"late/no-show"} title={"attendance/keycard"} data={[
                            ["Keycard", "Late employees"],
                            ["Carpenter", 12],
                            ["Commercial Roofer", 5],
                            ["Concrete", 7],
                            ["Flooring Installer", 11],
                            ["General Laborer", 7],
                            ["Manufacturing", 4],
                            ["HVAC", 1],
                            ["Painter", 3],
                            ["Residential Roofer", 9],
                            ["Siding Installer", 6]
                        ]}/>

                    </div>
                </div>
                <div>
                    <div className={`flex`}>
                        <div className={`w-1/2`}>
                            <LineChart data={props.airtableLine.records}/>
                        </div>
                        <div className={`w-1/2`}>
                            <BarChart data={props.airtableBar}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.title}>Production Hours/Keycard</div>
                    </div>
                </div>
            </SingleColumnLayout>
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
