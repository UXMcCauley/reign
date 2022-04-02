
import styles from "./styles/EmployeeId.module.scss"
import NumericDisplay from "../../components/dashboards/numericDisplay";
import GaugeChart from 'react-gauge-chart'
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import Heading from "../../components/headings/Heading";

export default function EmployeeId({employee}) {
    console.log(employee)
    return (
        <SingleColumnLayout>
            <div>
                <span className="inline-block relative w-1/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="h-56 w-56 rounded-full"
                         src={employee.avatar}
                         alt=""
                    />
                    {/*<span className="absolute top-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400"/>*/}
                </span>
                <div className={"inline-block pl-10 w-4/5 align-top"}>
                    <Heading label={`${employee.firstName} ${employee.lastName}`}/>
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
            </div>
            <div className="p-5 text-black bg-white overflow-hidden shadow rounded-lg mt-10 dark:bg-gray-800 ">
                <div className="px-4 py-5 mr-30 sm:p-6 border-r-1 border-gray-800 w-3/5 inline-block">
                    <h1 className={"mb-3 text-black dark:text-white"}>Bio</h1>
                    <div className={"text-sm font-light dark:text-white"}>{employee.bio}</div>
                </div>
                <div className="px-4 py-5 sm:p-6 border-r-1 border-gray-800 w-1/5 inline-block align-top dark:text-white">
                    <h1  className={"mb-3 text-black dark:text-white"}>Education</h1>
                    <div className={"text-sm font-light"}>
                        <ul>
                            <li>{employee.highSchool}</li>
                            <li>{employee.college}</li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-5 sm:p-6 border-r-1 border-gray-800 w-1/5 inline-block align-top dark:text-white">
                    <h1 className={"mb-3 text-black dark:text-white"}>Certifications</h1>
                    <div className={"text-sm font-light"}>
                        <ul>
                            <li>None</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.setFlex}>
                {/*Badges Row*/}
                <div className={styles.row}>
                    <div className={styles.flexBox}>
                        <h1>Badges</h1>
                        <div className={styles.badgesContainer}>
                            <div className={styles.badgeIcon}/>
                            <div className={styles.badgeIcon}/>
                            <div className={styles.badgeIcon}/>
                            <div className={styles.badgeIcon}/>
                            <div className={styles.badgeIcon}/>
                            <div className={styles.badgeIcon}/>
                        </div>
                    </div>
                </div>
                {/*Career Overview*/}
                <div className={styles.row}>
                    <div className={styles.flexBox} style={{width: "100%"}}>
                        <h1>Career Overview</h1>
                        <div style={{display: "flex", width: "100%", height: 50}}>
                            <div style={{
                                flex: .13,
                                backgroundColor: "rgba(152, 41, 171, 0.5)",
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <div style={{alignSelf: "center"}}>Education</div>
                            </div>
                            <div style={{
                                flex: .23,
                                backgroundColor: "rgba(86, 168, 215, 0.5)",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <div style={{alignSelf: "center"}}>Carpentry</div>
                            </div>
                            <div style={{
                                flex: .73,
                                backgroundColor: "rgba(225, 33, 98, 0.5)",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <div style={{alignSelf: "center"}}>Concrete</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Numeric Displays*/}
                <div className={styles.row}>
                    <div className={styles.flexBox}>
                        <NumericDisplay title={"attendance"} number={99} isPercent={true} hideLowerLabel={true}/>
                    </div>
                    <div className={styles.flexBox}>
                        <NumericDisplay title={"hourly rate"} number={24.77} isMoney={true} hideLowerLabel={true}/>
                    </div>
                    <div className={styles.flexBox}>
                        <NumericDisplay title={"time with company"} altLabel={"1.6y"} isMoney={false}
                                        hideLowerLabel={true}/>
                    </div>
                    <div className={styles.flexBox}>
                        <NumericDisplay title={"Paid time off"} altLabel={8.25} isMoney={false} hideLowerLabel={true}/>
                    </div>
                    <div className={styles.flexBox}>
                        <NumericDisplay title={"employer flags"} altLabel={"2"} isMoney={false} hideLowerLabel={true}/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.flexBox} style={{textAlign: "center"}}>
                        <h1>Performance Rating</h1>
                        <GaugeChart id="gauge-chart4"
                                    nrOfLevels={10}
                                    arcPadding={0.1}
                                    cornerRadius={3}
                                    percent={employee.performance/10}
                                    colors={['rgba(188, 26, 90, 0.5)', 'rgba(39, 105, 170, 0.5)', 'rgba(86, 213, 184, 0.5)']}
                                    formatTextValue={(value) => {
                                        return (value / 10)
                                    }}
                        />
                    </div>
                    <div className={styles.flexBox} style={{textAlign: "center"}}>
                        <h1>Performance indicator</h1>
                        <GaugeChart id="gauge-chart4"
                                    nrOfLevels={4}
                                    arcPadding={0.1}
                                    cornerRadius={3}
                                    percent={employee.kpi/10}
                                    colors={['rgba(188, 26, 90, 0.5)', 'rgba(39, 105, 170, 0.5)', 'rgba(86, 213, 184, 0.5)']}
                                    formatTextValue={(value) => {
                                        return (value / 10)
                                    }}
                        />
                    </div>
                    <div className={styles.flexBox} style={{flex: 1, textAlign: "center", position: "relative"}}>
                        <div style={{
                            height: "60px",
                            width: "8px",
                            backgroundColor: "yellowgreen",
                            position: "absolute",
                            top: "54px",
                            left: "70%"
                        }}/>
                        <h1>Success Probability</h1>
                        <div className={styles.flexBox} style={{width: "100%"}}>
                            <div style={{display: "flex", width: "100%", height: 50}}>
                                <div style={{
                                    flex: .33,
                                    backgroundColor: "rgba(188, 26, 90, 0.5)",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                    <div style={{alignSelf: "center"}}>Low</div>
                                </div>
                                <div style={{
                                    flex: .33,
                                    backgroundColor: "rgba(152, 41, 171, 0.5)",
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                    <div style={{alignSelf: "center"}}>Average</div>
                                </div>
                                <div style={{
                                    flex: .33,
                                    backgroundColor: "rgba(86, 213, 184, 0.5)",
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                    <div style={{alignSelf: "center"}}>Above Average</div>
                                </div>
                                <div style={{
                                    flex: .33,
                                    backgroundColor: "rgba(96, 193, 134, 0.5)",
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                    <div style={{alignSelf: "center"}}>High</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.row}>
                    <div className={styles.flexBox}>
                        <h1>Keycard Progress</h1>
                    </div>
                    <div className={styles.flexBox}>
                        <h1>Progress Chart</h1>
                    </div>

                </div>
                <div className={styles.row}>
                    <div className={styles.flexBox}>
                        <h1>Treemap</h1>
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
