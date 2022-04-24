import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import InequityGapFinder from "../../components/InequityGapFinder";
import TabbedNavigation from "../../components/TabbedNavigation"
import TopMetricYMQ3 from "../../components/TopMetricYMQ3";
import GooglePieChart from "../../components/GooglePieChart";
import {GoogleScatterChart} from "../../components/GoogleScatterChart";
import {useState} from "react";

export default function WorkforceDiversity({numericDataForPage}) {
    const empAgeKey = {
        0: 156,
        1: 31,
        2: 35,
        3: 41,
        4: 27,
        5: 23,
        6: 9
    }
    const [employeesAge, setEmployeesAge] = useState(empAgeKey[0])

    const salaryGenderKey = {
        "all": "$23.02",
        "male": "$24.11",
        "female": "$22.97",
        "other": "$21.99"
    }

    const [salaryGender, setSalaryGender] = useState(salaryGenderKey["all"])

    const salaryEthnicityKey = {
        "all": "$23.02",
        "african-american": "$24.11",
        "asian": "$21.97",
        "hispanic": "$21.99",
        "white": "$24.54"
    }

    const [salaryEthnicity, setSalaryEthnicity] = useState(salaryEthnicityKey["all"])

    return (
        <>
            <SingleColumnLayout>
                <TabbedNavigation/>
                <Heading label={"Workforce Diversity"}/>


                <div className={" flex justify-around w-full flex-row columns-6 items-start"}>


                    <TopMetricYMQ3 employees={numericDataForPage.employees} title={"employees"}/>


                    <TopMetricYMQ3 employees={numericDataForPage.employees} title={"employees / ethnicity"} type={"ethnicity"}/>


                    <TopMetricYMQ3 employees={numericDataForPage.employees} title={"employees / gender"} type={"gender"}/>


                    {/*temporary for prototype*/}
                    <div className={`flex flex-col align-middle text-center justify-center `}>
                        <div
                            className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{"employees / age"}</div>
                        <div className={"flex text-center flex-col align-middle justify-center"}>
                            <div
                                className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{employeesAge}</div>
                            <div className={`self-center mt-6`}>
                                <select className={"rounded-full dark:bg-gray-800 text-black dark:text-white"}
                                        onChange={(e) => {
                                           setEmployeesAge(empAgeKey[e.target.value])
                                        }}
                                >
                                    <option value={0}>All</option>
                                    <option value={1}>16-18</option>
                                    <option value={2}>18-25</option>
                                    <option value={3}>26-35</option>
                                    <option value={4}>36-45</option>
                                    <option value={5}>46-55</option>
                                    <option value={6}>56+</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    {/*temporary for prototype*/}
                    <div className={`flex flex-col align-middle text-center justify-center `}>
                        <div
                            className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{"salary / gender"}</div>
                        <div className={"flex text-center flex-col align-middle justify-center"}>
                            <div
                                className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{salaryGender}</div>
                            <div className={`self-center mt-6`}>
                                <select className={"rounded-full dark:bg-gray-800 text-black dark:text-white"}
                                        onChange={(e) => {
                                            setSalaryGender(salaryGenderKey[e.target.value])
                                        }}
                                >
                                    <option value={"all"}>All</option>
                                    <option value={"male"}>Male</option>
                                    <option value={"female"}>Female</option>
                                    <option value={"other"}>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>



                    {/*temporary for prototype*/}
                    <div className={`flex flex-col align-middle text-center justify-center `}>
                        <div
                            className={"text-sm text-black text-center uppercase font-light self-center dark:text-white mb-7"}>{"salary / ethnicity"}</div>
                        <div className={"flex text-center flex-col align-middle justify-center"}>
                            <div
                                className={"text-4xl text-black text-center proportional-nums dark:text-white"}>{salaryEthnicity}</div>
                            <div className={`self-center mt-6`}>
                                <select className={"rounded-full dark:bg-gray-800 text-black dark:text-white"}
                                        onChange={(e) => {
                                            setSalaryEthnicity(salaryEthnicityKey[e.target.value])
                                        }}
                                >
                                    <option value={"all"}>All</option>
                                    <option value={"african-american"}>African-American</option>
                                    <option value={"asian"}>Asian</option>
                                    <option value={"hispanic"}>Hispanic</option>
                                    <option value={"white"}>White</option>
                                </select>
                            </div>
                        </div>
                    </div>


                </div>



                <div className={`flex justify-around mb-10`}>
                    <GooglePieChart label={"employees"} title={"performance/gender"}
                                    showSelect={true}
                                    selectOptions={["Select a gender...", "Female", "Male", "Other"]}
                                    data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 6],
                                        ["5-6", 14],
                                        ["6-7", 39],
                                        ["7-8", 35],
                                        ["8-9", 21],
                                        ["9-10", 11]
                                    ]}/>

                    <GooglePieChart label={"employees"} title={"performance/ethnicity"}
                                    showSelect={true}
                                    selectOptions={["Select an ethnicity...", "African-American", "Asian", "Hispanic", "White"]}
                                    data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 16],
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
                                        ["<5", 26],
                                        ["5-6", 24],
                                        ["6-7", 19],
                                        ["7-8", 45],
                                        ["8-9", 51],
                                        ["9-10", 11]
                                    ]}/>

                    <GooglePieChart label={"employees"} title={"performance/level"}
                                    showSelect={true}
                                    selectOptions={["Select skill level...", "1", "2", "3"]}
                                    data={[
                                        ["Rating", "Number of employees"],
                                        ["<5", 6],
                                        ["5-6", 10],
                                        ["6-7", 11],
                                        ["7-8", 32],
                                        ["8-9", 23],
                                        ["9-10", 20]
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
    const url = baseUrl + "/api/search/employees?age=" + "All" + "&gender=" + "All" + "&ethnicity=" + "All"

    // fetch data
    const numericData = await fetch(url)

    // cast data to json
    const numericDataForPage = await numericData.json()

    // return data as component props on render
    return {props: {numericDataForPage}}
}
