import Head from 'next/head'
import ContentContainer from "../../components/universal/ContentContainer"
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer";
import styles from "./styles/Executive.module.scss";
import Numeric from "../../components/dashboards/numeric";
import Donuts from "../../components/dashboards/donuts";
import BarChart from "../../components/dashboards/bar";
import TreeMap from "../../components/dashboards/tree";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";

export default function WorkforceDiversity(props) {
    return (
        <>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <title>Dashboards - Workforce Diversity</title>
            </Head>
                <SingleColumnLayout>
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
                            <div style={{width: "100%"}}>
                                <BarChart data={props.airtableBar}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <TreeMap data={props.airtableTree}/>
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
    const bar = await fetch(url + app + "Bars" + key + "WorkforceDiversity")
    const donuts = await fetch(url + app + "Donuts" + key + "WorkforceDiversity")
    const line = await fetch(url + app + "Lines" + key + "WorkforceDiversity")
    const numeric = await fetch(url + app + "Numerics" + key + "WorkforceDiversity")
    const tree = await fetch(url + app + "TreeMap" + key + "WorkforceDiversity")

    // cast data to json
    const airtableBar = await bar.json()
    const airtableDonuts = await donuts.json()
    const airtableLine = await line.json()
    const airtableNumeric = await numeric.json()
    const airtableTree = await tree.json()

    // return data as component props on render
    return {props: {airtableBar, airtableDonuts, airtableLine, airtableNumeric, airtableTree}}
}
