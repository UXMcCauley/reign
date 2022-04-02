import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import Numeric from "../../components/dashboards/numeric";
// import faker from "@faker-js/faker";
import GooglePieChart from "../../components/dashboards/GooglePieChart";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import styles from "./styles/Executive.module.scss";
import Heading from "../../components/headings/Heading";

export default function EmployeePerformance(props) {
    // const fakeNumbers = () => {
    //     const arr = []
    //     for (let i = 0; i < 10; i++) {
    //         arr.push(faker.datatype.number({min: 0, max: 100}))
    //     }
    //     return arr
    // }
    // const fakeNumbers2 = () => {
    //     const arr = []
    //     for (let i = 0; i < 10; i++) {
    //         arr.push(faker.datatype.number({min: 0, max: 100}))
    //     }
    //     return arr
    // }
    // const fakeNumbers3 = () => {
    //     const arr = []
    //     for (let i = 0; i < 10; i++) {
    //         arr.push(faker.datatype.number({min: 0, max: 100}))
    //     }
    //     return arr
    // }

    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
        <>
            <SingleColumnLayout>
                <Heading label={"Employee Performance"}/>
                <div>
                    <div className={styles.flexRow}>
                        <Numeric data={props.airtableNumeric.records}/>
                    </div>
                </div>
                <div>
                    <div className={styles.flexRow}>
                        <GooglePieChart
                            label={"employees"}
                            title={"employee performance"}
                            data={[
                                ["Rating", "Number of employees"],
                                ["<5", 6],
                                ["5-6", 14],
                                ["6-7", 19],
                                ["7-8", 45],
                                ["8-9", 51],
                                ["9-10", 11]
                            ]}/>
                        <GooglePieChart
                            label={"employees"}
                            title={"training/keycard"}
                            data={[
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
                    </div>
                    <div className={styles.flexRow}>
                        <GooglePieChart
                            label={"employees"}
                            title={"employees/level"}
                            data={[
                                ["Rating", "Number of employees"],
                                ["Level 1", 600],
                                ["Level 2", 541],
                                ["Level 3", 321],

                            ]}/>

                    </div>
                </div>
                <div>
                    <div className={styles.flexRow}>
                    </div>
                </div>
                <div>
                    <div>
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
    const bar = await fetch(url + app + "Bars" + key + "EmployeePerformance")
    const donuts = await fetch(url + app + "Donuts" + key + "EmployeePerformance")
    const line = await fetch(url + app + "Lines" + key + "EmployeePerformance")
    const numeric = await fetch(url + app + "Numerics" + key + "EmployeePerformance")
    const tree = await fetch(url + app + "TreeMap" + key + "EmployeePerformance")

    // cast data to json
    const airtableBar = await bar.json()
    const airtableDonuts = await donuts.json()
    const airtableLine = await line.json()
    const airtableNumeric = await numeric.json()
    const airtableTree = await tree.json()

    // return data as component props on render
    return {props: {airtableBar, airtableDonuts, airtableLine, airtableNumeric, airtableTree}}
}
