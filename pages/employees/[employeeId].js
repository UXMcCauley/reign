import NumericDisplay from "../../components/numericDisplay";
import GaugeChart from 'react-gauge-chart'
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";
import Badges from "../../components/Badges";
import CareerOverviewBar from "../../components/CareerOverviewBar";
import SuccessProbabilityBar from "../../components/SuccessProbabilityBar";
import faker from "@faker-js/faker";
import {GoogleBarChart} from "../../components/GoogleBarChart";

export default function EmployeeId({employee}) {
    const makeDataItem = (task) => {
        return [task, faker.datatype.number({min: 0, max: 300})]
    }
    const barData = [
        ["Task", "Hours"],
        makeDataItem("Set-up"),
        makeDataItem("Clean-up"),
        makeDataItem("Moving Material"),
        makeDataItem("Roof Sheeting"),
        makeDataItem("Layouts"),
        makeDataItem("Building Stairs"),
        makeDataItem("Installing Tyvek"),
        makeDataItem("Exterior Wall Sheeting"),
        makeDataItem("Building Walls"),
    ]

    console.log(employee)
    return (
        <SingleColumnLayout>
            <div className={"w-4/5"}>
                <div>
                <span className="inline-block relative w-1/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="h-40 w-40 rounded-full"
                         src={employee.avatar}
                         alt=""
                    />
                    {/*<span className="absolute top-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"/>*/}
                </span>
                    <div className={"inline-block pl-10 w-4/5 align-top"}>
                        <Heading label={`${employee.firstName} ${employee.lastName}`}/>
                        <div className={"flex justify-between"}>
                            <div>
                                <div className={"text-gray-500 font-light text-sm"}>
                                    Phone: <span className={"dark:text-white"}>{employee.cell}</span>
                                </div>
                                <div className={"text-gray-500 font-light text-sm"}>
                                    Email: <span className={"dark:text-white"}>{employee.email}</span>
                                </div>
                                <div className={"text-gray-500 font-light text-sm"}>
                                    Address: <span
                                    className={"dark:text-white"}>{employee.street} {employee.city}, {employee.state} {employee.zipCode}</span>
                                </div>
                            </div>
                            <Badges/>
                        </div>
                    </div>
                </div>
                <div className="text-black mt-20 dark:text-white flex justify-between">
                    <div className=" w-2/5 inline-block">
                        <h1 className={"mb-3 text-black dark:text-white"}>Bio</h1>
                        <div className={"text-sm font-light dark:text-white"}>{employee.bio}</div>
                    </div>
                    <div
                        className="w-1/5 inline-block align-top dark:text-white">
                        <h1 className={"mb-3 text-black dark:text-white"}>Education</h1>
                        <div className={"text-sm font-light"}>
                            <ul>
                                <li>{employee.highSchool}</li>
                                <li>{employee.college}</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className=" w-1/5 inline-block align-top dark:text-white">
                        <h1 className={"mb-3 text-black dark:text-white"}>Certifications</h1>
                        <div className={"text-sm font-light"}>
                            <ul>
                                <li>None</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col"}>
                    <CareerOverviewBar/>
                    <div className={"flex justify-between mt-20"}>
                        <NumericDisplay title={"attendance"} number={99} isPercent={true} hideLowerLabel={true}/>
                        <NumericDisplay title={"hourly rate"} number={24.77} isMoney={true} hideLowerLabel={true}/>
                        <NumericDisplay title={"time with company"} altLabel={"1.6y"} isMoney={false} hideLowerLabel={true}/>
                        <NumericDisplay title={"Paid time off"} altLabel={8.25} isMoney={false} hideLowerLabel={true}/>
                        <NumericDisplay title={"employer flags"} altLabel={"2"} isMoney={false} hideLowerLabel={true}/>
                    </div>

                    <div className={"flex mt-20 justify-between"}>
                        <div className={"text-center w-1/5"}>
                            <h1 className={" text-black dark:text-white"}>Performance Rating</h1>
                            <GaugeChart id="gauge-chart4"
                                        nrOfLevels={10}
                                        arcPadding={0.1}
                                        cornerRadius={3}
                                        percent={(employee.performance / 10).toLocaleString(undefined, {maximumFractionDigits: 2})}
                                        colors={['rgb(105,40,208)', 'rgb(65,55,194)', 'rgb(183,25,91)']}
                                        formatTextValue={(value) => {
                                            return (value / 10)
                                        }}
                            />
                        </div>
                        <div className={"text-center w-1/5"}>
                            <h1 className={" text-black dark:text-white"}>KPI Gauge</h1>
                            <GaugeChart id="gauge-chart4"
                                        nrOfLevels={4}
                                        arcPadding={0.1}
                                        cornerRadius={3}
                                        percent={employee.kpi / 10}
                                        colors={['rgb(105,40,208)', 'rgb(65,55,194)', 'rgb(183,25,91)']}
                                        formatTextValue={(value) => {
                                            return (value / 10)
                                        }}
                            />
                        </div>
                        <div className={"w-2/5"}>
                            <SuccessProbabilityBar/>
                        </div>
                    </div>
                    <div className={"flex justify-between mt-20"}>
                        <div className={"w-1/5"}>
                            <h1 className={"text-black dark:text-white mb-16"}>Keycard Progress</h1>
                            <div className={"divide-y divide-solid dark:divide-gray-800 text-black dark:text-white text-xs"}>
                                <div className={"p-2 bg-gray-300 dark:bg-gray-700"}>
                                    Carpentry / Level 2 / 88%
                                </div>
                                <div className={"p-2 hover:bg-gray-200 dark:hover:bg-gray-800"}>
                                    Painting / Level 1 / 45%
                                </div>
                                <div className={"p-2 hover:bg-gray-200 dark:hover:bg-gray-800"}>
                                    Roofing / Level 1 / 13%
                                </div>
                            </div>
                        </div>
                        <div className={"w-4/5 pl-20"}>
                            <h1 className={"text-black dark:text-white"}>Progress Chart</h1>
                            <GoogleBarChart data={barData}/>
                        </div>

                    </div>
                    <div className={"flex justify-between mt-20"}>
                        <div className={"flex"}>
                            <h1 className={"text-black dark:text-white"}>Treemap</h1>
                        </div>
                    </div>
                </div>
            </div>
        </SingleColumnLayout>
    );
}

export async function getServerSideProps(context) {
    const empId = context.params.employeeId
    const {db} = await connectToDatabase()

    const employee = await db
        .collection("employees")
        .findOne({_id: ObjectId(empId)})

    const stringed = JSON.stringify(employee)

    return {
        props: {
            employee: JSON.parse(stringed)
        },
    }
}
