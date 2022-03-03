import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import {Line} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer";
import styles from "./Executive.module.scss";
import Numeric from "../../components/dashboards/numeric";
import Donuts from "../../components/dashboards/donuts";
import TreeMap from "../../components/dashboards/tree";
import faker from "@faker-js/faker";

export default function EmployeePerformance(props) {

    const MLChartOptions = {
        responsive: true,
        interaction: {
            mode: 'index' ,
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: '',
            },
        },
        scales: {
            y: {
                type: 'linear' ,
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear' ,
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    }

    const fakeNumbers = () => {
        const arr = []
        for (let i = 0; i < 10; i++){
            arr.push(faker.datatype.number({ min: 0, max: 100 }))
        }
        return arr
    }
    const fakeNumbers2 = () => {
        const arr = []
        for (let i = 0; i < 10; i++){
            arr.push(faker.datatype.number({ min: 0, max: 100 }))
        }
        return arr
    }
    const fakeNumbers3 = () => {
        const arr = []
        for (let i = 0; i < 10; i++){
            arr.push(faker.datatype.number({ min: 0, max: 100 }))
        }
        return arr
    }

    const MLChartData = {
        labels:["Residential Roofer", "Carpenter", "Concrete", "General Laborer", "Siding Installer", "Commercial Roofer", "Painter", "Flooring Installer", "HVAC", "Manufacturing"],
        datasets: [
            {
                label: 'Level I',
                data: fakeNumbers(),
                borderColor: 'rgb(204,242,12)',
                backgroundColor: 'rgb(204,242,12)',
                yAxisID: 'y',
            },
            {
                label: 'Level II',
                data: fakeNumbers2(),
                borderColor: 'rgb(23,108,228)',
                backgroundColor: 'rgb(23,108,228)',
                yAxisID: 'y1',
            },
            {
                label: 'Level III',
                data: fakeNumbers3(),
                borderColor: 'rgb(255, 159, 64)',
                backgroundColor: 'rgb(255, 159, 64)',
                yAxisID: 'y1',
            },
        ],
    }
    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <title>Dashboards - Employee Performance</title>
            </Head>
            <DashboardTitle label={"Employee Performance"} icon={"HandsClapping"}/>
            <ContentContainer>
                <DashboardLayoutContainer>
                    <div>
                        <div className={styles.flexRow}>
                            <Numeric data={props.airtableNumeric.records}/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flexRow}>
                            <Donuts data={props.airtableDonuts.records}/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flexRow}>
                            <Line options={MLChartOptions} data={MLChartData} type={"Line"}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <TreeMap data={props.airtableTree}/>
                        </div>
                    </div>
                </DashboardLayoutContainer>
            </ContentContainer>
        </Layout>
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
