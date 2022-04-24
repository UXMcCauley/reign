import {Chart} from "react-google-charts";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import TabbedNavigation from "../../components/TabbedNavigation"
import {useState} from "react";

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
        callback: ({chartWrapper}) => {
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

export default function ProjectDynamics() {
    const projectsKeycardKey = {
        "All": 12,
        "Carpenter": 4,
        "Commercial Roofer": 3,
        "HVAC": 2,
        "Flooring Installer": 1,
        "Siding Installer": 1,
        "Concrete": 1

    }

    const hoursProjectKey = {
        "All": "25,088",
        "Park Apartments": "4,411",
        "Serenity Mall": "3,102",
        "La Bonte Hotel": "3,054",
        "Fairview Golf Course": "2,874",
        "Meddish Cheese Co": "2,508",
        "Oscar House": "2,119",
        "Farreth House": "1,971",
        "Jade Parkway": "1,778",
        "Imperial Paving": "1,256",
        "Kroger Grocery": "1,101",
        "Best Buy": "914",
    }

    const performanceProjectKey = {
        "All": "8.44",
        "Park Apartments": "9.31",
        "Serenity Mall": "9.05",
        "La Bonte Hotel": "8.92",
        "Fairview Golf Course": "8.75",
        "Meddish Cheese Co": "8.67",
        "Oscar House": "8.55",
        "Farreth House": "8.31",
        "Jade Parkway": "8.22",
        "Imperial Paving": "8.06",
        "Kroger Grocery": "7.87",
        "Best Buy": "7.78",
    }

    const attendanceProjectKey = {
        "All": "97.64",
        "Oscar House": "100",
        "Farreth House": "99.8",
        "Park Apartments": "97.97",
        "Serenity Mall": "95.45",
        "La Bonte Hotel": "94.75",
        "Imperial Paving": "93.12",
        "Kroger Grocery": "93.01",
        "Best Buy": "92.66",
        "Fairview Golf Course": "91.87",
        "Meddish Cheese Co": "90.09",
        "Jade Parkway": "88.45",

    }

    const laborProjectKey = {
        "All": "579,031",
        "Kroger Grocery": "171,458",
        "Best Buy": "124,712",
        "Fairview Golf Course": "116,828",
        "Meddish Cheese Co": "62,041",
        "Jade Parkway": "55,557",
        "Park Apartments": "31,128",
        "Serenity Mall": "30,308",
        "La Bonte Hotel": "27,116",
        "Imperial Paving": "21,461",
        "Oscar House": "19,489",
        "Farreth House": "14,682",


    }

    const [projectsKeycard, setProjectsKeycard] = useState(projectsKeycardKey["All"])
    const [hoursProject, setHoursProject] = useState(hoursProjectKey["All"])
    const [performanceProject, setPerformanceProject] = useState(performanceProjectKey["All"])
    const [attendanceProject, setAttendanceProject] = useState(attendanceProjectKey["All"])
    const [laborProject, setLaborProject] = useState(laborProjectKey["All"])

    return (
        <>
            <SingleColumnLayout>
                <TabbedNavigation/>
                <Heading label={"Project Dynamics"}/>
                <div className={" flex justify-around w-full flex-row columns-6 items-start"}>


                    {/*temporary for prototype start*/}
                    <div className={`flex flex-col align-middle text-center justify-center `}>
                        <div
                            className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{"total projects"}</div>
                        <div className={"flex text-center flex-col align-middle justify-center"}>
                            <div
                                className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{Object.keys(hoursProjectKey).length}</div>
                        </div>
                    </div>


                    {/*temporary for prototype*/}
                    <div className={`flex flex-col align-middle text-center justify-center `}>
                        <div
                            className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{"projects / keycard"}</div>
                        <div className={"flex text-center flex-col align-middle justify-center"}>
                            <div
                                className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{projectsKeycard}</div>
                            <div className={`self-center mt-6`}>
                                <select className={"rounded-full dark:bg-gray-800 text-black dark:text-white"}
                                        onChange={(e) => {
                                            setProjectsKeycard(projectsKeycardKey[e.target.value])
                                        }}
                                >
                                    {Object.keys(projectsKeycardKey).map((key, i) => <option key={i} value={key}>{key}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>


                    {/*temporary for prototype*/}
                    <div className={`flex flex-col align-middle text-center justify-center `}>
                        <div
                            className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{"hours / project"}</div>
                        <div className={"flex text-center flex-col align-middle justify-center"}>
                            <div
                                className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{hoursProject}</div>
                            <div className={`self-center mt-6`}>
                                <select className={"rounded-full dark:bg-gray-800 text-black dark:text-white"}
                                        onChange={(e) => {
                                            setHoursProject(hoursProjectKey[e.target.value])
                                        }}
                                >
                                    {Object.keys(hoursProjectKey).map((key, i) => <option key={i} value={key}>{key}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>


                    {/*temporary for prototype*/}
                    <div className={`flex flex-col align-middle text-center justify-center `}>
                        <div
                            className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{"performance / project"}</div>
                        <div className={"flex text-center flex-col align-middle justify-center"}>
                            <div
                                className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{performanceProject}</div>
                            <div className={`self-center mt-6`}>
                                <select className={"rounded-full dark:bg-gray-800 text-black dark:text-white"}
                                        onChange={(e) => {
                                            setPerformanceProject(performanceProjectKey[e.target.value])
                                        }}
                                >
                                    {Object.keys(performanceProjectKey).map((key, i) => <option key={i} value={key}>{key}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>


                    {/*temporary for prototype*/}
                    <div className={`flex flex-col align-middle text-center justify-center `}>
                        <div
                            className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{"attendance / project"}</div>
                        <div className={"flex text-center flex-col align-middle justify-center"}>
                            <div
                                className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{attendanceProject}%</div>
                            <div className={`self-center mt-6`}>
                                <select className={"rounded-full dark:bg-gray-800 text-black dark:text-white"}
                                        onChange={(e) => {
                                            setAttendanceProject(attendanceProjectKey[e.target.value])
                                        }}
                                >
                                    {Object.keys(attendanceProjectKey).map((key, i) => <option key={i} value={key}>{key}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>


                    {/*temporary for prototype*/}
                    <div className={`flex flex-col align-middle text-center justify-center `}>
                        <div
                            className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{"labor cost / project"}</div>
                        <div className={"flex text-center flex-col align-middle justify-center"}>
                            <div
                                className={"text-4xl text-black text-center proportional-nums dark:text-white"}>${laborProject}</div>
                            <div className={`self-center mt-6`}>
                                <select className={"rounded-full dark:bg-gray-800 text-black dark:text-white"}
                                        onChange={(e) => {
                                            setLaborProject(laborProjectKey[e.target.value])
                                        }}
                                >
                                    {Object.keys(laborProjectKey).map((key, i) => <option key={i} value={key}>{key}</option>)}
                                </select>
                            </div>
                        </div>
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
