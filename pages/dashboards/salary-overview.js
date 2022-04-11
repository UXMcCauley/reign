import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import TabbedNavigation from "../../components/TabbedNavigation"
import TopMetricYMQ2 from "../../components/TopMetricYMQ2";
import GooglePieChart from "../../components/GooglePieChart";
import InequityGapFinder from "../../components/InequityGapFinder";
import {GoogleBarChart} from "../../components/GoogleBarChart";
import faker from "@faker-js/faker";
import {GooglePieChart2} from "../../components/GooglePieChart2";

export default function SalaryOverview({numericDataForPage}) {
    const makeDataItem = (task) => {
        return [task, faker.datatype.number({min: 19, max: 26})]
    }
    const barData = [
        ["Keycard", "Wage"],
        makeDataItem("Male"),
        makeDataItem("Female"),
        makeDataItem("Other Gender"),
        makeDataItem("African-American"),
        makeDataItem("Asian"),
        makeDataItem("Hispanic"),
        makeDataItem("16-18"),
        makeDataItem("19-25"),
        makeDataItem("26-35"),
        makeDataItem("36-45"),
        makeDataItem("46-55"),
        makeDataItem("56+"),
    ]

    const pieData = [
        ["Keycard", "Wage"],
        makeDataItem("Male"),
        makeDataItem("Female"),
        makeDataItem("Other Gender"),
        makeDataItem("African-American"),
        makeDataItem("Asian"),
        makeDataItem("Hispanic"),
        makeDataItem("16-18"),
        makeDataItem("19-25"),
        makeDataItem("26-35"),
        makeDataItem("36-45"),
        makeDataItem("46-55"),
        makeDataItem("56+"),
    ]

    return (
        <>
            <SingleColumnLayout>
                <TabbedNavigation/>
                <Heading label={"Workforce Diversity"}/>
                <div className={" flex justify-between w-full flex-row columns-6 items-start"}>
                    <TopMetricYMQ2 value={numericDataForPage.data} title={"average wage"} type={false}/>
                    <TopMetricYMQ2 value={numericDataForPage.data} title={"wage/gender"} type={"byGender"}/>
                    <TopMetricYMQ2 value={numericDataForPage.data} title={"wage/ethnicity"} type={"byEthnicity"}/>
                    <TopMetricYMQ2 value={numericDataForPage.data} title={"wage/age"} type={"byAge"}/>
                    <TopMetricYMQ2 value={numericDataForPage.data} title={"wage/keycard"} type={"byKeycard"}/>
                    <TopMetricYMQ2 value={numericDataForPage.data} title={"wage/performance"} type={"byAge"}/>
                </div>
                <div className={`flex justify-between mb-10`}>
                    <GooglePieChart label={"hours"} title={"overtime/keycard"}
                                    showSelect={false}
                                    selectOptions={["All", "Carpenter", "Commercial Roofer", "Concrete", "HVAC", "Manufacturing", "Siding Installer", "Flooring Installer", "Residential Roofer", "General Laborer", "Painter"]}
                                    data={[
                                        ["Keycard", "Overtime"],
                                        ["Carpenter", 16],
                                        ["Commercial Roofer", 114],
                                        ["Concrete", 119],
                                        ["HVAC", 145],
                                        ["Manufacturing", 251],
                                        ["Siding Installer", 311],
                                        ["Flooring Installer", 45],
                                        ["Residential Roofer", 245],
                                        ["General Laborer", 145],
                                        ["Painter", 245],
                                    ]}/>

                    <GooglePieChart label={"hours"} title={"overtime/ethnicity"}
                                    showSelect={false}
                                    selectOptions={["Select an ethnicity...", "African-American", "Asian", "Hispanic", "White"]}
                                    data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 36],
                                        ["5-6", 214],
                                        ["6-7", 119],
                                        ["7-8", 345],
                                        ["8-9", 251],
                                        ["9-10", 111]
                                    ]}/>

                    <GooglePieChart label={"hours"} title={"overtime/age"}
                                    showSelect={false}
                                    selectOptions={["Select an age...", "16-18", "19-25", "26-35", "36-45", "46-55", "56+"]}
                                    data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 216],
                                        ["5-6", 314],
                                        ["6-7", 119],
                                        ["7-8", 245],
                                        ["8-9", 351],
                                        ["9-10", 111]
                                    ]}/>

                    <GooglePieChart label={"hours"} title={"overtime/gender"}
                                    showSelect={false}
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
                <div className={"mt-20 flex"}>
                    <div className={"w-1/2"}>
                        <h1 className={"text-black dark:text-white w-full text-center"}>wages/group</h1>
                        <GoogleBarChart data={barData}/>
                    </div>
                    <div className={"w-1/2"}>
                        <h1 className={"text-black dark:text-white w-full text-center relative"}>payroll/group</h1>
                        <GooglePieChart2 data={pieData}/>
                    </div>
                </div>
                <div className={"mt-20"}>
                    <h1 className={"text-black dark:text-white w-full text-center"}>Pay Gap Finder</h1>
                    <InequityGapFinder/>
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
    const url =  baseUrl + "/api/search/salary-overview"

    // fetch data
    const numericData = await fetch(url)

    // cast data to json
    const numericDataForPage = await numericData.json()

    // return data as component props on render
    return {props: {numericDataForPage}}
}
