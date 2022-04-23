import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import InequityGapFinder from "../../components/InequityGapFinder";
import TabbedNavigation from "../../components/TabbedNavigation"
import TopMetricYMQ3 from "../../components/TopMetricYMQ3";
import GooglePieChart from "../../components/GooglePieChart";
import {GoogleScatterChart} from "../../components/GoogleScatterChart";

export default function WorkforceDiversity({numericDataForPage}) {
    console.log(numericDataForPage)
    return (
        <>
            <SingleColumnLayout>
                <TabbedNavigation/>
                <Heading label={"Workforce Diversity"}/>
                <div className={" flex justify-between w-full flex-row columns-6 items-start"}>
                    <TopMetricYMQ3 employees={numericDataForPage.employees} title={"employees"}/>
                    <TopMetricYMQ3 employees={numericDataForPage.employees} title={"employees / ethnicity"} type={"ethnicity"}/>
                    <TopMetricYMQ3 employees={numericDataForPage.employees} title={"employees / gender"} type={"gender"}/>
                    <TopMetricYMQ3 employees={numericDataForPage.employees} title={"employees/age"} type={"age"}/>

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
