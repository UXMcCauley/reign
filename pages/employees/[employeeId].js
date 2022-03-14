import {useRouter} from "next/router";
import ContentContainer from "../../components/universal/layout";
import {useEffect, useState} from "react";
import absoluteUrl from "next-absolute-url";
import styles from "./styles/EmployeeId.module.scss"
import {Download} from "phosphor-react";
import NumericDisplay from "../../components/dashboards/numericDisplay";
import GaugeChart from 'react-gauge-chart'

function EmployeeId({reqData}) {
    const router = useRouter()
    const empId = router.query.employeeId
    const [employeeData, setEmployeeData] = useState({
        employee:
            {
                birthdate: "",
                cell: "",
                city: "",
                email: "",
                firstName: "",
                gender: "",
                home: "",
                lastName: "",
                organization: "",
                password: "",
                pronouns: "",
                state: "",
                street: "",
                timestamp: "",
                username: "",
                zipCode: "",
                _id: "",
                bio: "",
                education: []
            }
    })

    const getActiveEmployee = async () => {
        // fetch employee timecard data after click
        const {origin} = absoluteUrl()
        const apiURL = `${origin}/api/one/employee?employeeId=${empId}`
        const data = await fetch(apiURL)
        data.json()
            .then(res => {
                setEmployeeData(res)
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getActiveEmployee().then(res => console.log(res))
    }, [])

    return (
        <ContentContainer>
            <div className={styles.setFlex}>
                {/*Contact Row*/}
                <div className={styles.row}>
                    <div className={styles.flexBox}>
                        <div style={{width: 60, height: 60, borderRadius: 30, backgroundColor: "rgba(225, 33, 98, 0.5)"}}/>
                    </div>
                    <div className={styles.flexBox}>
                        <span style={{padding: "10px", display: "inline-block"}}>{employeeData.employee.firstName} {employeeData.employee.lastName}</span>
                        <span style={{padding: "10px", display: "inline-block"}}>dob: {employeeData.employee.birthdate}</span>
                        <span style={{padding: "10px", display: "inline-block"}}>cell: {employeeData.employee.cell} </span>
                        <span style={{padding: "10px", display: "inline-block"}}>home: {employeeData.employee.home}</span>
                        <span style={{padding: "10px", display: "inline-block"}}>{employeeData.employee.email}</span>
                        <span style={{padding: "10px", display: "inline-block"}}>
                            {employeeData.employee.street} {employeeData.employee.city}, {employeeData.employee.state} {employeeData.employee.zipCode}
                        </span>
                    </div>
                    <div className={styles.flexBox}>

                    </div>
                    <div className={styles.flexBox}>
                        <select>
                            <option>Select a project...</option>
                        </select>
                    </div>

                    <div className={styles.flexBox} style={{width: "60px"}}>
                        <Download size={30} color={"white"}/>
                    </div>
                </div>
                {/*Bio Row*/}
                <div className={styles.row}>
                    <div className={styles.flexBox}>
                        <h1>Bio</h1>
                        {employeeData.employee.bio}
                    </div>
                    <div className={styles.flexBox}>
                        <h1>Education</h1>
                        <ul>
                            {employeeData.employee.education.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div className={styles.flexBox}>
                        <h1>Certifications</h1>
                        <ul>
                            {employeeData.employee.education.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
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
                            <div style={{flex: .13, backgroundColor: "rgba(152, 41, 171, 0.5)", textAlign: "center", display: "flex", justifyContent: "center"}}>
                                <div style={{alignSelf: "center"}}>Education</div>
                            </div>
                            <div style={{flex: .23, backgroundColor: "rgba(86, 168, 215, 0.5)", display: "flex", justifyContent: "center"}}>
                                <div style={{alignSelf: "center"}}>Carpentry</div>
                            </div>
                            <div style={{flex: .73, backgroundColor: "rgba(225, 33, 98, 0.5)", display: "flex", justifyContent: "center"}}>
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
                    <div className={styles.flexBox} style={{ textAlign: "center"}}>
                        <h1>Performance Rating</h1>
                        <GaugeChart id="gauge-chart4"
                                    nrOfLevels={10}
                                    arcPadding={0.1}
                                    cornerRadius={3}
                                    percent={0.85}
                                    colors={['rgba(188, 26, 90, 0.5)', 'rgba(39, 105, 170, 0.5)', 'rgba(86, 213, 184, 0.5)']}
                                    formatTextValue={(value) => {
                                        return (value/10)
                                    }}
                        />
                    </div>
                    <div className={styles.flexBox} style={{ textAlign: "center"}}>
                        <h1>Performance indicator</h1>
                        <GaugeChart id="gauge-chart4"
                                    nrOfLevels={10}
                                    arcPadding={0.1}
                                    cornerRadius={3}
                                    percent={0.6}
                                    colors={['rgba(188, 26, 90, 0.5)', 'rgba(39, 105, 170, 0.5)', 'rgba(86, 213, 184, 0.5)']}
                                    formatTextValue={(value) => {
                                        return (value/10)/3
                                    }}
                        />
                    </div>
                    <div className={styles.flexBox} style={{flex: 1, textAlign: "center", position: "relative"}}>
                        <div style={{height: "60px", width: "8px", backgroundColor: "yellowgreen", position: "absolute", top: "54px", left: "70%"}}/>
                        <h1>Success Probability</h1>
                        <div className={styles.flexBox} style={{width: "100%"}}>
                            <div style={{display: "flex", width: "100%", height: 50}}>
                                <div style={{flex: .33, backgroundColor: "rgba(188, 26, 90, 0.5)", textAlign: "center", display: "flex", justifyContent: "center"}}>
                                    <div style={{alignSelf: "center"}}>Low</div>
                                </div>
                                <div style={{flex: .33, backgroundColor: "rgba(152, 41, 171, 0.5)", display: "flex", justifyContent: "center"}}>
                                    <div style={{alignSelf: "center"}}>Average</div>
                                </div>
                                <div style={{flex: .33, backgroundColor: "rgba(86, 213, 184, 0.5)", display: "flex", justifyContent: "center"}}>
                                    <div style={{alignSelf: "center"}}>Above Average</div>
                                </div>
                                <div style={{flex: .33, backgroundColor: "rgba(96, 193, 134, 0.5)", display: "flex", justifyContent: "center"}}>
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
        </ContentContainer>
    );
}

export default EmployeeId;
