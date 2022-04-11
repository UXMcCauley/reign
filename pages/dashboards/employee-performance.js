// components
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import TopMetricYMQ from "../../components/TopMetricYMQ";
import GoogleTreemap from "../../components/GoogleTreeMap";
import faker from "@faker-js/faker";
import {UserIcon, UserGroupIcon,} from "@heroicons/react/outline";
import TabbedNavigation from "../../components/TabbedNavigation"
import Router from "next/router"
// charts
import GooglePieChart from "../../components/GooglePieChart";
import {GoogleScatterChart} from "../../components/GoogleScatterChart";

const minFake = 0
const maxFake = 188

const minFakeColor = -122
const maxFakeColor = 122

const makeParentItem = (parent, title) => {
    return [title, parent, faker.datatype.number({
        min: minFake,
        max: maxFake
    }), faker.datatype.number({min: minFakeColor, max: maxFakeColor})]
}

const makeDataItem = (parent, task) => {
    return [parent + " / " + task, parent, faker.datatype.number({
        min: minFake,
        max: maxFake
    }), faker.datatype.number({min: minFakeColor, max: maxFakeColor})]
}

const data = [
    // headers
    [
        "Keycard",
        "Parent",
        "Production Hours for Card",
        "High/Low Production Hours",
    ],
    // root
    ["Keycards", null, 0, 21],
    // keycards
    makeParentItem("Keycards", "Concrete"),
    makeParentItem("Keycards", "Carpenter"),
    makeParentItem("Keycards", "Commercial Roofer"),
    makeParentItem("Keycards", "Residential Roofer"),
    makeParentItem("Keycards", "HVAC"),
    makeParentItem("Keycards", "Siding"),
    makeParentItem("Keycards", "Flooring"),
    makeParentItem("Keycards", "Manufacturing"),
    makeParentItem("Keycards", "General laborer"),
    makeParentItem("Keycards", "Painter"),

    // concrete tasks
    makeDataItem("Concrete", "Set-up"),
    makeDataItem("Concrete", "Clean-up"),
    makeDataItem("Concrete", "Puddling"),
    makeDataItem("Concrete", "Moving Gravel"),
    makeDataItem("Concrete", "Setting Forms"),
    makeDataItem("Concrete", "Pulling Forms"),
    makeDataItem("Concrete", "Striking Off"),
    makeDataItem("Concrete", "Edging"),
    makeDataItem("Concrete", "Floating"),
    makeDataItem("Concrete", "Compacting Gravel"),
    makeDataItem("Concrete", "Finishing Concrete"),
    makeDataItem("Concrete", "Cleaning Tools"),
    makeDataItem("Concrete", "Wheeling Concrete"),
    makeDataItem("Concrete", "Cutting Joints"),
    makeDataItem("Concrete", "Using Cement Saw"),
    makeDataItem("Concrete", "Misc Concrete Work"),
    //carpenter tasks
    makeDataItem("Carpenter", "Set-Up"),
    makeDataItem("Carpenter", "Clean-Up"),
    makeDataItem("Carpenter", "Moving material"),
    makeDataItem("Carpenter", "Layouts"),
    makeDataItem("Carpenter", "Setting Trusses"),
    makeDataItem("Carpenter", "Setting Floor Joist"),
    makeDataItem("Carpenter", "Building Walls"),
    makeDataItem("Carpenter", "Building Gables"),
    makeDataItem("Carpenter", "Exterior Wall Sheeting"),
    makeDataItem("Carpenter", "Roof Sheeting"),
    makeDataItem("Carpenter", "Misc Carpentry"),
    makeDataItem("Carpenter", "Building Stair Systems"),
    makeDataItem("Carpenter", "Installing Tyvek"),
    makeDataItem("Carpenter", "Floor Decking "),
    // commercial roofer tasks
    makeDataItem("Commercial Roofer", "Tear-Off"),
    makeDataItem("Commercial Roofer", "Clean-up"),
    makeDataItem("Commercial Roofer", "Material Layout"),
    makeDataItem("Commercial Roofer", "Laying Insulation"),
    makeDataItem("Commercial Roofer", "Roof Load"),
    makeDataItem("Commercial Roofer", "Roof Unload"),
    makeDataItem("Commercial Roofer", "Install Decking"),
    makeDataItem("Commercial Roofer", "Install Penetrations"),
    makeDataItem("Commercial Roofer", "Install T-Bar"),
    makeDataItem("Commercial Roofer", "Install Metal"),
    makeDataItem("Commercial Roofer", "Install TPO"),
    makeDataItem("Commercial Roofer", "Install Rubber"),
    // residential roofer tasks
    makeDataItem("Residential Roofer", "Tear-Off"),
    makeDataItem("Residential Roofer", "Clean-up"),
    makeDataItem("Residential Roofer", "Roofing Installation"),
    makeDataItem("Residential Roofer", "Lifetime Shingle Installation"),
    makeDataItem("Residential Roofer", "Valley Installation"),
    makeDataItem("Residential Roofer", "Edge Metal Installation"),
    makeDataItem("Residential Roofer", "Ridge Cap/Vent"),
    makeDataItem("Residential Roofer", "Underlayment Installation"),
    makeDataItem("Residential Roofer", "Penetration Installation"),
    makeDataItem("Residential Roofer", "In-House Practice"),
    makeDataItem("Residential Roofer", "Decking/Sheeting Installation"),
    makeDataItem("Residential Roofer", "Misc Roofing Work"),
    // HVAC tasks
    makeDataItem("HVAC", "Set-Up"),
    makeDataItem("HVAC", "Clean-Up"),
    makeDataItem("HVAC", "Moving Material"),
    makeDataItem("HVAC", "Delivering Material"),
    makeDataItem("HVAC", "Duct Installation"),
    makeDataItem("HVAC", "Assist in System Install"),
    makeDataItem("HVAC", "Install Drains"),
    makeDataItem("HVAC", "Caulking"),
    makeDataItem("HVAC", "Remove old System"),
    makeDataItem("HVAC", "Furnace Install"),
    makeDataItem("HVAC", "Misc HVAC Task"),
    // siding installer tasks
    makeDataItem("Siding", "Set-Up"),
    makeDataItem("Siding", "Clean-Up"),
    makeDataItem("Siding", "Moving Material"),
    makeDataItem("Siding", "Layouts"),
    makeDataItem("Siding", "Cutting Material"),
    makeDataItem("Siding", "Installing Siding"),
    makeDataItem("Siding", "Installing Underlayment"),
    makeDataItem("Siding", "Tyvek Installation"),
    makeDataItem("Siding", "Caulking"),
    makeDataItem("Siding", "Installing Metal"),
    makeDataItem("Siding", "Bending Metal"),
    makeDataItem("Siding", "Installing Trim"),
    makeDataItem("Siding", "Painting"),
    // flooring installer tasks
    makeDataItem("Flooring", "Set-Up"),
    makeDataItem("Flooring", "Clean-Up"),
    makeDataItem("Flooring", "Moving Material"),
    makeDataItem("Flooring", "Install underlayment"),
    makeDataItem("Flooring", "Installing Wood Flooring"),
    makeDataItem("Flooring", "Installing Vinyl Flooring"),
    makeDataItem("Flooring", "Removing Existing Floor"),
    makeDataItem("Flooring", "Prep Work"),
    makeDataItem("Flooring", "Install Sub-Floor"),
    makeDataItem("Flooring", "Misc Flooring Task"),
    makeDataItem("Flooring", "Sanding Existing Floor"),
    makeDataItem("Flooring", "Staining or Clear Coating"),
    // manufacturing tasks
    makeDataItem("Manufacturing", "Set-Up"),
    makeDataItem("Manufacturing", "Clean-Up"),
    makeDataItem("Manufacturing", "CNC Machine Operation"),
    makeDataItem("Manufacturing", "Former Machine Operation"),
    makeDataItem("Manufacturing", "Router"),
    makeDataItem("Manufacturing", "Band-Saw"),
    makeDataItem("Manufacturing", "Packaging"),
    makeDataItem("Manufacturing", "Counting Parts"),
    makeDataItem("Manufacturing", "Quality Control"),
    makeDataItem("Manufacturing", "Misc Manufacturing"),
    // general laborer
    makeDataItem("General laborer", "Set-Up"),
    makeDataItem("General laborer", "Clean-Up"),
    makeDataItem("General laborer", "Demo Work"),
    makeDataItem("General laborer", "Moving Material"),
    makeDataItem("General laborer", "Assist in Building"),
    makeDataItem("General laborer", "Assist in Installation"),
    makeDataItem("General laborer", "Prep-Work"),
    // painter
    makeDataItem("Painter", "Set-up"),
    makeDataItem("Painter", "Clean-Up"),
    makeDataItem("Painter", "Scrapping Walls"),
    makeDataItem("Painter", "Skim Coating"),
    makeDataItem("Painter", "Using Sprayer"),
    makeDataItem("Painter", "Rolling Paint"),
    makeDataItem("Painter", "Brush/Cut Work"),
    makeDataItem("Painter", "Trim Work"),
    makeDataItem("Painter", "Taping"),
    makeDataItem("Painter", "Drywall Work"),
    makeDataItem("Painter", "Sanding"),
    makeDataItem("Painter", "Prep Work"),
    makeDataItem("Painter", "Staining"),
    makeDataItem("Painter", "Applying Texture"),
    makeDataItem("Painter", "Misc Painting"),
];

export default function EmployeePerformance({numericDataForPage}) {
    console.log(numericDataForPage)

    return (
        <>
            <SingleColumnLayout>
                <TabbedNavigation/>
                <Heading label={"Employee Performance"}/>
                <div className={" flex justify-between w-full flex-row columns-6 items-start"}>
                    <TopMetricYMQ value={numericDataForPage.data[0].averagePerformance} title={"performance rating"}
                                  options={["All", "Carpenter", "Commercial Roofer", "Concrete", "HVAC", "Manufacturing", "Siding Installer", "Flooring Installer", "Residential Roofer", "General Laborer", "Painter"]}
                                  showSelect={true}/>
                    <TopMetricYMQ value={numericDataForPage.data[0].averageAttendance} title={"attendance"}
                                  showSelect={true}
                                  options={["All", "Carpenter", "Commercial Roofer", "Concrete", "HVAC", "Manufacturing", "Siding Installer", "Flooring Installer", "Residential Roofer", "General Laborer", "Painter"]}/>
                    <TopMetricYMQ value={numericDataForPage.data[0].averageKpi} title={"kpi"} showSelect={true}
                                  options={["All", "Carpenter", "Commercial Roofer", "Concrete", "HVAC", "Manufacturing", "Siding Installer", "Flooring Installer", "Residential Roofer", "General Laborer", "Painter"]}/>
                    <TopMetricYMQ value={2} title={"time w/ company"} showSelect={true}
                                  options={["All", "Carpenter", "Commercial Roofer", "Concrete", "HVAC", "Manufacturing", "Siding Installer", "Flooring Installer", "Residential Roofer", "General Laborer", "Painter"]}/>
                    <a href={"/employees"}>
                        <button
                            className={"w-40 rounded-xl bg-violet-700 p-6 uppercase font-light hover:bg-violet-500"}>
                            <UserIcon className={"h-10 w-10 m-auto mb-3"}/>
                            Compare employees
                        </button>
                    </a>
                    <a href={"/teams"}>
                        <button className={"w-40 rounded-xl bg-pink-700 p-6 uppercase font-light hover:bg-pink-500"}>
                            <UserGroupIcon className={"h-10 w-10 m-auto mb-3"}/>
                            Compare teams
                        </button>
                    </a>
                </div>
                <div>
                    <div className={`flex justify-between mb-10`}>
                        <GooglePieChart label={"employees"} title={"performance/employee"} data={[
                            ["Rating", "Number of employees"],
                            ["<5", 6],
                            ["5-6", 14],
                            ["6-7", 19],
                            ["7-8", 45],
                            ["8-9", 51],
                            ["9-10", 11]
                        ]}/>

                        <GooglePieChart label={"hours"} title={"training/keycard"} data={[
                            ["Keycard", "Training hours"],
                            ["Carpenter", 1103],
                            ["Commercial Roofer", 1034],
                            ["Concrete", 900],
                            ["Flooring Installer", 1672],
                            ["General Laborer", 783],
                            ["Manufacturing", 1209],
                            ["HVAC", 609],
                            ["Painter", 399],
                            ["Residential Roofer", 1478],
                            ["Siding Installer", 230]
                        ]}/>

                        <GooglePieChart label={"late/no-show"} title={"attendance/keycard"} data={[
                            ["Keycard", "Late employees"],
                            ["Carpenter", 12],
                            ["Commercial Roofer", 5],
                            ["Concrete", 7],
                            ["Flooring Installer", 11],
                            ["General Laborer", 7],
                            ["Manufacturing", 4],
                            ["HVAC", 1],
                            ["Painter", 3],
                            ["Residential Roofer", 9],
                            ["Siding Installer", 6]
                        ]}/>

                    </div>
                </div>
                <div className={"w-full"}>
                    <h1 className={"text-black dark:text-white w-full text-center"}>Performance/level</h1>
                    <GoogleScatterChart labels={["Level", "Level 1", "Level 2", "Level 3"]} height={500}/>
                </div>
                <div className={"w-full"}>
                    <GoogleTreemap title={"Production hours/Keycard"} data={data}/>
                </div>
            </SingleColumnLayout>
        </>
    )
}

export async function getServerSideProps(context) {
    const {req} = context;

    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

    // set up variables
    const url =  baseUrl + "/api/search/employees?age=" + "All" + "&gender=" + "All" + "&ethnicity=" + "All"

    // fetch data
    const numericData = await fetch(url)

    // cast data to json
    const numericDataForPage = await numericData.json()

    // return data as component props on render
    return {props: {numericDataForPage}}
}
