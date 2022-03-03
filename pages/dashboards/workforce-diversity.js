import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DashboardTitle from "../../components/dashboards/dashboardTitle"
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer";
import styles from "./Executive.module.scss";
import Numeric from "../../components/dashboards/numeric";
import Donuts from "../../components/dashboards/donuts";
import LineChart from "../../components/dashboards/line";
import BarChart from "../../components/dashboards/bar";
import TreeMap from "../../components/dashboards/tree";

export default function WorkforceDiversity(props) {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <title>Dashboards - Workforce Diversity</title>
            </Head>
            <DashboardTitle label={"Workforce Diversity"} icon={"Fingerprint"}/>

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
