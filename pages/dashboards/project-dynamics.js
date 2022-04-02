import Head from 'next/head'
import ContentContainer from "../../components/universal/ContentContainer"
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer";
import styles from "./styles/Executive.module.scss";
import Numeric from "../../components/dashboards/numeric";
import { useState} from "react";
import {Modal} from 'react-responsive-modal';
import {Chart} from "react-google-charts";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
];

const chartEvents = [
    {
        callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            chart.container.addEventListener("click", (ev) => console.log(ev))
        },
        eventName: "ready"
    }
];

const colors = [
    "#e12162",
    "#bc1a5a",
    "#9829ab",
    "#5528ab",
    "#282bab",
    "#2769aa",
    "#56a8d7",
    "#56d5b8",
    "#60c186",
]
export const modalOptions = {
    backgroundColor: "transparent",
    pieHole: 0.6,
    stroke: "black",
    border: "none",
    // legend: 'none',
    chartArea: {'width': '100%', 'height': '80%'},
    width: 600,
    height: 600,
    colors: colors
};

export const bodyOptions = {
    backgroundColor: "transparent",
    pieHole: 0.6,
    stroke: "black",
    border: "none",
    legend: 'none',
    chartArea: {'width': '100%', 'height': '80%'},
    width: 300,
    height: 300,
    colors: colors,
    pieSliceBorderColor: "black"
};


export default function ProjectDynamics(props) {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="REIGN"/>
                <title>Dashboards - Project Dynamics</title>
            </Head>
            <SingleColumnLayout>
                    <div>
                        <button onClick={onOpenModal}>Open modal</button>

                    </div>
                    <div>
                        <div className={styles.flexRow}>
                            <Numeric data={props.airtableNumeric.records}/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flexRow} style={{opacity: 0.8}}>
                            <Chart
                                chartType="PieChart"
                                data={data}
                                options={bodyOptions}
                                chartEvents={chartEvents}
                            />
                            <Chart
                                chartType="PieChart"
                                data={data}
                                options={bodyOptions}
                            />
                            <Chart
                                chartType="PieChart"
                                data={data}
                                options={bodyOptions}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={styles.flexRow}>
                            <div className={styles.half}>
                                <div style={{height: 350, width: "100%"}}>
                                </div>
                            </div>
                            <div className={styles.half}>
                                <div style={{height: 350, width: "100%"}}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style={{height: 500}}>
                            </div>
                        </div>
                    </div>
                    <Modal open={open} onClose={onCloseModal} center>
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={modalOptions}
                        />
                    </Modal>
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
    const bar = await fetch(url + app + "Bars" + key + "ProjectDynamics")
    const donuts = await fetch(url + app + "Donuts" + key + "ProjectDynamics")
    const line = await fetch(url + app + "Lines" + key + "ProjectDynamics")
    const numeric = await fetch(url + app + "Numerics" + key + "ProjectDynamics")
    const tree = await fetch(url + app + "TreeMap" + key + "ProjectDynamics")

    // cast data to json
    const airtableBar = await bar.json()
    const airtableDonuts = await donuts.json()
    const airtableLine = await line.json()
    const airtableNumeric = await numeric.json()
    const airtableTree = await tree.json()

    // return data as component props on render
    return {props: {airtableBar, airtableDonuts, airtableLine, airtableNumeric, airtableTree}}
}
