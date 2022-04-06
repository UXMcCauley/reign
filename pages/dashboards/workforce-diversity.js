import Donuts from "../../components/dashboards/donuts";
import BarChart from "./components/bar";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import InequityGapFinder from "./components/InequityGapFinder";

export default function WorkforceDiversity(props) {
    return (
        <>
                <SingleColumnLayout>
                    <Heading label={"Workforce Diversity"}/>
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
                            <div className={"w-full"}>
                                <BarChart data={props.airtableBar}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={"mt-10"}>
                            <h1 className={"text-black dark:text-white"}>Inequity Gap Finder</h1>
                            <InequityGapFinder/>
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
