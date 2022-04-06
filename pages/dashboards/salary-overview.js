import Donuts from "../../components/donuts";
import LineChart from "../../components/line";
import BarChart from "../../components/bar";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import TabbedNavigation from "../../components/TabbedNavigation"

export default function SalaryOverview(props) {
    return (
        <>
            <SingleColumnLayout>
                <TabbedNavigation/>
                <Heading label={"Salary Overview"}/>
                    <div>
                        <div className={"flex"}>
                        </div>
                    </div>
                    <div>
                        <div className={"flex"}>
                            <Donuts data={props.airtableDonuts.records}/>
                        </div>
                    </div>
                    <div>
                        <div className={"flex"}>
                            <div className={"w-1/2"}>
                                <LineChart data={props.airtableLine.records}/>
                            </div>
                            <div className={"w-1/2"}>
                                <BarChart data={props.airtableBar}/>
                            </div>
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
    const bar = await fetch(url + app + "Bars" + key + "SalaryOverview")
    const donuts = await fetch(url + app + "Donuts" + key + "SalaryOverview")
    const line = await fetch(url + app + "Lines" + key + "SalaryOverview")
    const numeric = await fetch(url + app + "Numerics" + key + "SalaryOverview")
    const tree = await fetch(url + app + "TreeMap" + key + "SalaryOverview")

    // cast data to json
    const airtableBar = await bar.json()
    const airtableDonuts = await donuts.json()
    const airtableLine = await line.json()
    const airtableNumeric = await numeric.json()
    const airtableTree = await tree.json()

    // return data as component props on render
    return {props: {airtableBar, airtableDonuts, airtableLine, airtableNumeric, airtableTree}}
}
