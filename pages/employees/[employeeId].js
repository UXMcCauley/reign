import NumericDisplay from "../../components/numericDisplay";
import GaugeChart from 'react-gauge-chart'
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import CareerOverviewBar from "../../components/CareerOverviewBar";
import SuccessProbabilityBar from "../../components/SuccessProbabilityBar";
import faker from "@faker-js/faker";
import {GoogleBarChartRTR} from "../../components/GoogleBarChartRTR";
import Bio from "../../components/Bio"
import PersonalInfo from "../../components/PersonalInfo";

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
            <div className={"w-[1000px] m-auto p-12 shadow-2xl bg-white rounded-2xl"}>
                <div className={"flex justify-between"}>
                    <PersonalInfo data={employee}/>
                    <Bio data={employee}/>
                </div>

                <div className={"border-b-2 mt-10"}/>

                <div className={"flex flex-col"}>
                    <CareerOverviewBar/>
                    <div className={"flex justify-between mt-10"}>
                        <NumericDisplay title={"attendance"} number={99} isPercent={true} hideLowerLabel={true}/>
                        <NumericDisplay title={"hourly rate"} number={24.77} isMoney={true} hideLowerLabel={true}/>
                        <NumericDisplay title={"time with company"} altLabel={"1.6y"} isMoney={false}
                                        hideLowerLabel={true}/>
                        <NumericDisplay title={"Paid time off"} altLabel={8.25} isMoney={false} hideLowerLabel={true}/>
                        <NumericDisplay title={"employer flags"} altLabel={"2"} isMoney={false} hideLowerLabel={true}/>
                    </div>

                    <div className={"flex mt-10 justify-between"}>
                        <div className={"text-center w-1/5"}>
                            <p className={" text-black "}>Performance Rating</p>
                            <GaugeChart id="gauge-chart4"
                                        nrOfLevels={10}
                                        textColor={"#000000"}
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
                            <p className={" text-black "}>KPI Gauge</p>
                            <GaugeChart id="gauge-chart4"
                                        nrOfLevels={4}
                                        textColor={"#000000"}
                                        arcPadding={0.1}
                                        cornerRadius={3}
                                        percent={(employee.kpi / 10).toLocaleString(undefined, {maximumFractionDigits: 2})}
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

                    <div className={"border-b-2 mt-10"}/>

                    <div className={"flex justify-between mt-10"}>
                        <div className={"w-1/5"}>
                            <p className={"text-black  mb-16 w-full text-center"}>Keycard Progress</p>
                            <div className={"divide-y divide-solid  text-black  text-xs"}>
                                <div className={"p-2 bg-gray-300 "}>
                                    Carpentry / Level 2 / 88%
                                </div>
                                <div className={"p-2 hover:bg-gray-200 "}>
                                    Painting / Level 1 / 45%
                                </div>
                                <div className={"p-2 hover:bg-gray-200 "}>
                                    Roofing / Level 1 / 13%
                                </div>
                            </div>
                        </div>
                        <div className={"w-4/5 pl-20"}>
                            <p className={"text-black w-full text-center"}>Progress Chart</p>
                            <GoogleBarChartRTR data={barData}/>
                        </div>

                    </div>
                    {/*<div className={" mt-10"}>*/}
                    {/*        <p className={"text-black  w-full text-center"}>Treemap</p>*/}
                    {/*</div>*/}
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
