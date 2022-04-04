import {useEffect, useState} from "react";

export default function TeamsEmployeeList({employees}) {
    const [employeeList, setEmployeeList] = useState([employees])
    const [selectedEmployees, setSelectedEmployees] = useState([])
    const [teamName, setTeamName] = useState("")
    let [wages, setWages] = useState(0)
    let [KPI, setKPI] = useState(0)
    let [performance, setPerformance] = useState(0)
    let [attendance, setAttendance] = useState(0)
    const orgId = "61bf60ecddd910d9c0a18df1"

    const removeFromArray = (id) => {
        setSelectedEmployees(prevState => {
            return prevState.filter(employee => employee.id !== id)
        })
    }

    const createTeam = async (body) => {
        await fetch("/api/add/team", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        setEmployeeList(employees)
    }, [])
    return (
        <div className={`flex`}>
            <div className={`w-1/2`}>
                <h1>Staff</h1>
                <fieldset className="space-y-5">
                    <legend className="sr-only">Notifications</legend>
                    {employeeList.map((employee, i) => {
                        return (
                            <div key={i} className="relative flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id={employee._id}
                                        aria-describedby={`${employee.firstName} ${employee.lastName}`}
                                        name={employee._id}
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        onChange={(e) => {
                                            let idx
                                            const found = selectedEmployees.find((item, i) => {
                                                if (item.id === employee._id) {
                                                    idx = i
                                                    return true
                                                }
                                            })
                                            if (!found) {
                                                setSelectedEmployees(prevState => [...prevState, {
                                                    id: employee._id,
                                                    name: employee.firstName + " " + employee.lastName,
                                                    kpi: employee.kpi,
                                                    performance: employee.performance,
                                                    wage: employee.wage,
                                                    attendance: employee.attendance
                                                }])
                                                setWages(wages += employee.wage)
                                                setKPI(KPI += employee.kpi)
                                                setPerformance(performance += employee.performance)
                                                setAttendance(attendance += employee.attendance)
                                            } else {
                                                removeFromArray(employee._id)
                                                setWages(wages -= employee.wage)
                                                setKPI(KPI -= employee.kpi)
                                                setPerformance(performance -= employee.performance)
                                                setAttendance(attendance -= employee.attendance)
                                            }
                                        }}
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="offers" className="text-white font-medium text-gray-700">
                                        {employee.lastName} {employee.firstName}
                                    </label>
                                    <p id="offers-description" className="text-gray-500">
                                        <span className={`text-pink-500`}>KPI:</span> {employee.kpi}
                                        <span
                                            className={`text-violet-500 ml-4`}>Performance:</span> {employee.performance}
                                        <span
                                            className={`text-orange-500 ml-4`}>Attendance:</span> {employee.attendance}
                                        <span className={`text-green-500 ml-4`}>Wage:</span> {employee.wage}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </fieldset>
            </div>
            <div className={`w-1/2`}>
                <h1>Team</h1>
                <input className={"text-black"} type={"text"} onChange={(e) => {
                    setTeamName(e.target.value)
                }}/>
                <div>
                    <div className={"flex justify-between"}>
                        <div>
                            <div className={"text-black dark:text-white"}>Wages/hour</div>
                            <div className={"text-center text-3xl"}>
                                ${wages.toLocaleString(undefined, {maximumFractionDigits: 2}).replace("-", "")}
                            </div>
                        </div>
                        <div>
                            <div className={"text-black dark:text-white"}>Avg/KPI</div>
                            <div className={"text-center text-3xl"}>
                                {(KPI / selectedEmployees.length).toLocaleString(undefined, {maximumFractionDigits: 2}).replace("-", "").replace("NaN", "")}
                            </div>
                        </div>
                        <div>
                            <div className={"text-black dark:text-white"}>Avg/Performance</div>
                            <div className={"text-center text-3xl"}>
                                {(performance / selectedEmployees.length).toLocaleString(undefined, {maximumFractionDigits: 2}).replace("-", "").replace("NaN", "")}
                            </div>
                        </div>
                        <div>
                            <div className={"text-black dark:text-white"}>Avg/Attendance</div>
                            <div className={"text-center text-3xl"}>
                                {(attendance / selectedEmployees.length).toLocaleString(undefined, {maximumFractionDigits: 2}).replace("-", "").replace("NaN", "")}%
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"mt-12 mb-12"}>{selectedEmployees.map((person, i) => {
                    return (
                        <div key={i}>
                            {person.name}
                            <span className={`text-pink-500 ml-4`}>KPI:</span> {person.kpi}
                            <span
                                className={`text-violet-500 ml-4`}>Performance:</span> {person.performance}
                            <span
                                className={`text-orange-500 ml-4`}>Attendance:</span> {person.attendance}
                            <span className={`text-green-500 ml-4`}>Wage:</span> {person.wage}
                        </div>
                    )
                })}</div>
                <button onClick={() => {
                    if (teamName !== "") {
                        createTeam({
                            name: teamName,
                            kpi: KPI,
                            attendance: attendance,
                            wages: wages,
                            performance: performance,
                            members: selectedEmployees,
                            orgId: orgId
                        })
                    } else {
                        alert("Please enter a unique team name.")
                    }

                }}>
                    Create team
                </button>
            </div>
        </div>
    )
}
