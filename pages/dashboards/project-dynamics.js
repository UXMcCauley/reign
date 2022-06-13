import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import TabbedNavigation from "../../components/TabbedNavigation"
import {useState} from "react";
import GooglePieChart from "../../components/GooglePieChart";
import LineChart2 from "../../components/line2";
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";
import ProjectsTable from "../../components/ProjectsTable";
import CompareProjectsWidget from "../../components/compareProjectsWidget";

const orgURL = "61bf60ecddd910d9c0a18df1"

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
];

// const chartEvents = [
//     {
//         callback: ({chartWrapper}) => {
//             const chart = chartWrapper.getChart();
//             chart.container.addEventListener("click", (ev) => console.log(ev))
//         },
//         eventName: "ready"
//     }
// ];

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

export default function ProjectDynamics({projects}) {
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

    const [comparedProjects, setComparedProjects] = useState([])

    const handleCompareClick = (val) => {

        if (comparedProjects.length === 2) {
            alert("Only 2 projects may be compared. Clearing comparison.")
            setComparedProjects([])
        } else {
            const hasValue = comparedProjects.filter(item => item.name === val.name)
            if (hasValue.length === 0) {
                setComparedProjects(prevState => [...prevState, val])
            } else {
                setComparedProjects(prevState => prevState.filter(item => item.name !== val.name))
            }
        }


    }

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
                                    {Object.keys(projectsKeycardKey).map((key, i) => <option key={i}
                                                                                             value={key}>{key}</option>)}
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
                                    {Object.keys(hoursProjectKey).map((key, i) => <option key={i}
                                                                                          value={key}>{key}</option>)}
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
                                    {Object.keys(performanceProjectKey).map((key, i) => <option key={i}
                                                                                                value={key}>{key}</option>)}
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
                                className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{attendanceProject}%
                            </div>
                            <div className={`self-center mt-6`}>
                                <select className={"rounded-full dark:bg-gray-800 text-black dark:text-white"}
                                        onChange={(e) => {
                                            setAttendanceProject(attendanceProjectKey[e.target.value])
                                        }}
                                >
                                    {Object.keys(attendanceProjectKey).map((key, i) => <option key={i}
                                                                                               value={key}>{key}</option>)}
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
                                    {Object.keys(laborProjectKey).map((key, i) => <option key={i}
                                                                                          value={key}>{key}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={"flex mt-10 justify-around"}>
                    <div className={"w-1/4"}>
                        <GooglePieChart label={"employees"} title={"performance / project"}
                                        showSelect={true}
                                        selectOptions={["All",
                                            "Oscar House",
                                            "Farreth House",
                                            "Park Apartments",
                                            "Serenity Mall",
                                            "La Bonte Hotel",
                                            "Imperial Paving",
                                            "Kroger Grocery",
                                            "Best Buy",
                                            "Fairview Golf Course",
                                            "Meddish Cheese Co",
                                            "Jade Parkway"]}
                                        data={[
                                            ["Rating", "Number of employees"],
                                            ["<5", 2],
                                            ["5-6", 3],
                                            ["6-7", 4],
                                            ["7-8", 8],
                                            ["8-9", 12],
                                            ["9-10", 17]
                                        ]}/>
                    </div>
                    <div className={"w-3/5"}>
                        <LineChart2 data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            datasets: [
                                {
                                    label: "Carpenter",
                                    data: [11, 12, 13, 6, 5, 5, 7, 3, 2, 14, 12, 10],
                                    borderColor: 'rgb(255, 99, 132)',
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                },
                                {
                                    label: "Commercial Roofer",
                                    data: [11, 13, 10, 9, 8, 5, 6, 4, 5, 7, 8, 7],
                                    borderColor: 'rgb(99,187,255)',
                                    backgroundColor: 'rgba(99,226,255,0.5)',
                                },
                                {
                                    label: "HVAC",
                                    data: [5, 4, 3, 2, 1, 10, 8, 9, 7, 6, 7, 4],
                                    borderColor: 'rgb(99,255,112)',
                                    backgroundColor: 'rgba(99,255,102,0.5)',
                                },
                                {
                                    label: "Concrete",
                                    data: [9, 2, 7, 2, 7, 5, 4, 6, 3, 5, 10, 11],
                                    borderColor: 'rgb(255,99,219)',
                                    backgroundColor: 'rgba(255,99,242,0.5)',
                                },
                                {
                                    label: "Flooring",
                                    data: [7, 5, 3, 6, 8, 9, 10, 5, 7, 11, 5, 6],
                                    borderColor: 'rgb(255,146,99)',
                                    backgroundColor: 'rgba(255,128,99,0.5)',
                                },
                                {
                                    label: "Siding",
                                    data: [1, 6, 5, 1, 7, 12, 14, 10, 11, 4, 5, 4,],
                                    borderColor: 'rgb(245,255,99)',
                                    backgroundColor: 'rgba(239,255,99,0.5)',
                                }
                            ]
                        }}/>
                    </div>
                </div>

                <div className={"flex mt-10"}>
                    <div className={"w-2/3"}>
                        <ProjectsTable projects={projects} click={handleCompareClick}/>
                    </div>
                    <div className={"w-1/3"}>

                        <CompareProjectsWidget comparedProjects={comparedProjects}/>
                        <div className={"self-center"}>
                            <button
                                className={`${comparedProjects.length > 0 ? "visible" : "hidden"}  bg-violet-800 `}
                                onClick={() => {
                                    setComparedProjects([])
                                }}>Clear comparison
                            </button>
                        </div>
                    </div>
                </div>
            </SingleColumnLayout>
        </>
    )
}


export async function getServerSideProps() {

    const {db} = await connectToDatabase()
    const projects = await db
        .collection("projects")
        .find({"organization": ObjectId(orgURL)})
        .toArray()

    const returnProjects = JSON.stringify(projects)

    return {
        props: {
            projects: JSON.parse(returnProjects)
        }
    }
}

