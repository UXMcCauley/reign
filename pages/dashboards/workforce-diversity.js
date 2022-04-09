import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import InequityGapFinder from "../../components/InequityGapFinder";
import TabbedNavigation from "../../components/TabbedNavigation"
import TopMetricYMQ from "../../components/TopMetricYMQ";
import GooglePieChart from "../../components/GooglePieChart";
import {GoogleScatterChart} from "../../components/GoogleScatterChart";

export default function WorkforceDiversity() {
    return (
        <>
            <SingleColumnLayout>
                <TabbedNavigation/>
                <Heading label={"Workforce Diversity"}/>
                <div className={" flex justify-between w-full flex-row columns-6 items-start"}>
                    <TopMetricYMQ value={151} title={"employees"} options={["one"]}/>
                    <TopMetricYMQ value={151} title={"employees/ethnicity"} showSelect={true}
                                  options={["All", "African-American", "Asian", "Hispanic", "White"]}/>
                    <TopMetricYMQ value={151} title={"employees/gender"} showSelect={true}
                                  options={["All", "Female", "Male", "Other"]}/>
                    <TopMetricYMQ value={151} title={"employees/age"} showSelect={true}
                                  options={["All", "16-18", "19-25", "26-35", "36-45", "46-55", "56+"]}/>
                    <TopMetricYMQ value={23.31} title={"wage/gender"} showSelect={true}
                                  options={["All", "Female", "Male", "Other"]}/>
                    <TopMetricYMQ value={23.31} title={"wage/ethnicity"} showSelect={true}
                                  options={["All", "African-American", "Asian", "Hispanic", "White"]}/>
                </div>
                <div className={`flex justify-between mb-10`}>
                    <GooglePieChart label={"employees"} title={"performance/gender"}
                                    showSelect={true}
                                    selectOptions={["Select a gender...", "Female", "Male", "Other"]}
                                    data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 6],
                                        ["5-6", 14],
                                        ["6-7", 19],
                                        ["7-8", 45],
                                        ["8-9", 51],
                                        ["9-10", 11]
                                    ]}/>

                    <GooglePieChart label={"employees"} title={"performance/ethnicity"}
                                    showSelect={true}
                                    selectOptions={["Select an ethnicity...", "African-American", "Asian", "Hispanic", "White"]}
                                    data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 6],
                                        ["5-6", 14],
                                        ["6-7", 19],
                                        ["7-8", 45],
                                        ["8-9", 51],
                                        ["9-10", 11]
                                    ]}/>

                    <GooglePieChart label={"employees"} title={"performance/age"}
                                    showSelect={true}
                                    selectOptions={["Select an age...", "16-18", "19-25", "26-35", "36-45", "46-55", "56+"]}
                                    data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 6],
                                        ["5-6", 14],
                                        ["6-7", 19],
                                        ["7-8", 45],
                                        ["8-9", 51],
                                        ["9-10", 11]
                                    ]}/>

                    <GooglePieChart label={"employees"} title={"performance/level"}
                                    showSelect={true}
                                    selectOptions={["Select skill level...", "Female", "Male", "Other"]}
                                    data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 6],
                                        ["5-6", 14],
                                        ["6-7", 19],
                                        ["7-8", 45],
                                        ["8-9", 51],
                                        ["9-10", 11]
                                    ]}/>

                </div>
                <div className={"mt-20"}>
                    <h1 className={"text-black dark:text-white w-full text-center"}>Inequity Gap Finder</h1>
                    <InequityGapFinder/>
                </div>
                <div className={"w-full mt-20"}>
                    <h1 className={"text-black dark:text-white w-full text-center"}>Performance/keycard/gender</h1>
                    <GoogleScatterChart labels={["Gender", "Female", "Male", "Other"]} height={300}/>
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
