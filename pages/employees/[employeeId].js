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
import {useState} from "react";

export default function EmployeeId({employee}) {
    const [barData, setBarData] = useState("barData1")
    const makeDataItem = (task, requiredHours) => {
        return [task, faker.datatype.number({min: 0, max: 200}), requiredHours]
    }
    const barData1 = [
        ["Task", "Hours Worked", "Hours Needed"],
        makeDataItem("Set-up", 100),
        makeDataItem("Clean-up", 150),
        makeDataItem("Moving Material", 50),
        makeDataItem("Roof Sheeting", 80),
        makeDataItem("Layouts", 200),
        makeDataItem("Building Stairs", 80),
        makeDataItem("Installing Tyvek", 200),
        makeDataItem("Exterior Wall Sheeting", 180),
        makeDataItem("Building Walls", 150),
    ]
    const barData2 = [
        ["Task", "Hours Worked", "Hours Needed"],
        makeDataItem("Set-up", 100),
        makeDataItem("Clean-up", 150),
        makeDataItem("Moving Material", 50),
        makeDataItem("Roof Sheeting", 80),
        makeDataItem("Layouts", 200),
        makeDataItem("Building Stairs", 80),
        makeDataItem("Installing Tyvek", 200),
        makeDataItem("Exterior Wall Sheeting", 180),
        makeDataItem("Building Walls", 150),
    ]
    const barData3 = [
        ["Task", "Hours Worked", "Hours Needed"],
        makeDataItem("Set-up", 100),
        makeDataItem("Clean-up", 150),
        makeDataItem("Moving Material", 50),
        makeDataItem("Roof Sheeting", 80),
        makeDataItem("Layouts", 200),
        makeDataItem("Building Stairs", 80),
        makeDataItem("Installing Tyvek", 200),
        makeDataItem("Exterior Wall Sheeting", 180),
        makeDataItem("Building Walls", 150),
    ]

    const keycardJSX = (keycard, level, progress, setValue) => {
        return (
            <div className={`flex justify-between font-light ${barData === setValue ? "bg-pink-700 text-white" : "bg-gray-200"}`} onClick={() => {setBarData(setValue)}}>
                <div className={"flex-1 p-2"}>
                    <div className={"text-lg"}>{keycard}</div>
                    <div>Level {level}</div>
                </div>
                <div className={"flex items-center"}>
                    <div className={"p-3 text-2xl"}>{progress}%</div>
                </div>
            </div>
        )
    }

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

                    <div className={"flex justify-between mt-10 "}>
                        <div className={""}>
                            <p className={"text-black mb-8 w-full text-center"}>Keycard Progress</p>
                            <div className={"divide-y divide-solid divide-pink-700 text-black text-xs rounded overflow-hidden"}>
                                {keycardJSX("Carpenter", 2, 88, "barData1")}
                                {keycardJSX("Painter", 1, 45, "barData2")}
                                {keycardJSX("Roofer", 1, 32, "barData3")}
                            </div>
                        </div>
                        <div className={"flex-1"}>
                            <p className={"text-black w-full text-center"}>Progress Chart</p>
                            <GoogleBarChartRTR data={eval(barData)}/>
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
    // const empId = context.params.employeeId
    const {employeeId} = context.params
    const {db} = await connectToDatabase()

    const employee = await db
        .collection("employees")
        .findOne({_id: ObjectId(employeeId)})

    const stringed = JSON.stringify(employee)

    return {
        props: {
            employee: JSON.parse(stringed)
        },
    }
}
