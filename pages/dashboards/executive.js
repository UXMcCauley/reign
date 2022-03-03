import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import {TreeMapComponent} from '@syncfusion/ej2-react-treemap'
import DashboardTitle from "../../components/dashboards/dashboardTitle"
import DashboardLayoutContainer from "../../components/dashboards/dashboardLayoutContainer"
import Donuts from "../../components/dashboards/donuts"
import Numeric from "../../components/dashboards/numeric"
import LineChart from "../../components/dashboards/line"
import styles from "./Executive.module.scss"
import BarChart from "../../components/dashboards/bar"

export default function Executive(props) {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN"/>
                <link rel="icon" href="/public/favicon.ico"/>
                <title>Dashboards - Executive Overview</title>
            </Head>
            <DashboardTitle label={"Executive Overview"} icon={"Gauge"}/>
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
                            <h1>Production Hours per Keycard</h1>
                            <div style={{width: "100%"}}>
                                <TreeMapComponent id='treemap'
                                                  dataSource={[
                                                      {Keycard: 'Res Roofer', GDP: 17946, percentage: 11.08, Rank: 1},
                                                      {Keycard: 'Carpenter', GDP: 10866, percentage: 28.42, Rank: 2},
                                                      {Keycard: 'Concrete', GDP: 4123, percentage: -30.78, Rank: 3},
                                                      {Keycard: 'Gen Labor', GDP: 3355, percentage: -5.19, Rank: 4},
                                                      {Keycard: 'Siding Inst', GDP: 2848, percentage: 8.28, Rank: 5},
                                                      {Keycard: "Comm. Roofer", GDP: 2421, percentage: -9.69, Rank: 6},
                                                      {Keycard: 'Painter', GDP: 2073, percentage: 13.65, Rank: 7},
                                                      {
                                                          Keycard: 'Flooring Inst',
                                                          GDP: 1814,
                                                          percentage: -12.45,
                                                          Rank: 8
                                                      },
                                                      {Keycard: "HVAC", GDP: 1774, percentage: -27.88, Rank: 9},
                                                      {
                                                          Keycard: "Manufacturing",
                                                          GDP: 1550,
                                                          percentage: -15.02,
                                                          Rank: 10
                                                      }
                                                  ]} weightValuePath='GDP'
                                                  palette={['rgb(211,250,0)', 'rgb(23,108,228)', 'rgb(4,215,252)', 'rgb(255,0,183)', 'rgb(79,10,231)', 'rgb(255, 159, 64)', 'rgb(255, 159, 64)']}
                                                  leafItemSettings={{
                                                      labelPath: 'Keycard',
                                                      labelTemplate: '<div>{{:GDP}}hrs</div>',
                                                      templatePosition: 'Center'
                                                  }}>
                                </TreeMapComponent>
                            </div>
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
    const bar = await fetch(url + app + "Bars" + key + "Executive")
    const donuts = await fetch(url + app + "Donuts" + key + "Executive")
    const line = await fetch(url + app + "Lines" + key + "Executive")
    const numeric = await fetch(url + app + "Numerics" + key + "Executive")

    // cast data to json
    const airtableBar = await bar.json()
    const airtableDonuts = await donuts.json()
    const airtableLine = await line.json()
    const airtableNumeric = await numeric.json()

    // return data as component props on render
    return {props: {airtableBar, airtableDonuts, airtableLine, airtableNumeric}}
}