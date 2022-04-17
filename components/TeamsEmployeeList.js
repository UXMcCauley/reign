import {useEffect, useState} from "react";
import faker from "@faker-js/faker";

export default function TeamsEmployeeList({employees}) {
    const [employeeList, setEmployeeList] = useState([{
        attendance: 0,
        avatar: "",
        bio: "bio",
        birthdate: "2003-01-17T22:22:01.965Z",
        cell: "cell",
        city: "city",
        college: "college",
        createdAt: "2022-04-02T13:59:04.857Z",
        email: "email",
        firstName: "First",
        gender: "gender",
        highSchool: "high school",
        home: "home",
        kpi: 0,
        lastName: "Last",
        organization: "organization",
        password: "password",
        performance: 0,
        pronouns: "pronouns",
        startDate: "2017-01-01T04:56:08.187Z",
        state: "state",
        street: "street",
        username: "username",
        wage: 0,
        zipCode: "zipCode",
        _id: "00000000000000000",
    }])
    const [selectedEmployees, setSelectedEmployees] = useState([])
    const [teamName, setTeamName] = useState("")
    let [wages, setWages] = useState(0)
    let [KPI, setKPI] = useState(0)
    let [performance, setPerformance] = useState(0)
    let [attendance, setAttendance] = useState(0)
    const orgId = "61bf60ecddd910d9c0a18df1"

    const generateRandomTeamName = () => {
        const adjective = faker.word.adjective()
        const color = faker.commerce.color()
        const noun = faker.word.noun()
        setTeamName(adjective.toUpperCase(0) + " " + color.toUpperCase(0) + " " + noun.toUpperCase(0))
    }

    const removeFromArray = (id) => {
        setSelectedEmployees(prevState => {
            return prevState.filter(employee => employee.id !== id)
        })
        console.log(selectedEmployees.length)
      if  (selectedEmployees.length === 0) {
          setWages(0)
      }
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
    }, [employees])
    return (
        <div className={`flex`}>
            <div className={`w-2/5`}>
                <p className={"text-black dark:text-white text-xl"}>Staff</p>
                <p className={"text-black  dark:text-white text-xs"}>Please add employees to your team.</p>
                <fieldset className="space-y-5">
                    <legend className="sr-only">Notifications</legend>
                    {employeeList.map((employee, i) => {
                        return (
                            <div key={i} className="relative flex items-start">
                                <div className="flex items-center self-center h-5">
                                    <input
                                        id={employee._id}
                                        aria-describedby={`${employee.firstName} ${employee.lastName}`}
                                        name={employee._id}
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded self-center"
                                        onChange={() => {
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
                                    <label htmlFor="offers" className="text-black dark:text-white font-medium text-sm ">
                                        {employee.firstName} {employee.lastName}
                                    </label>
                                    <p id="offers-description" className="text-gray-500 text-xs">
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
            <div className={`w-2/5`}>
                <p className={"text-black dark:text-white text-xl"}>Team Details</p>
                <p className={"text-black  dark:text-white text-xs mb-6"}>Data will populate here once you add team members.</p>

                <div>
                    <div className={"flex justify-around bg-gray-100 dark:bg-gray-800 p-5 shadow-2xl mb-10"}>
                        <div className={"text-black dark:text-white"}>
                            <div>Wages/hour</div>
                            <div className={"text-center text-3xl"}>
                                {wages !== 0 ?
                                    "$" + wages.toLocaleString(undefined, {maximumFractionDigits: 2}).replace("-", "") :
                                    null
                                }

                            </div>
                        </div>
                        <div className={"text-black dark:text-white"}>
                            <div>Avg/KPI</div>
                            <div className={"text-center text-3xl"}>
                                {(KPI / selectedEmployees.length).toLocaleString(undefined, {maximumFractionDigits: 2}).replace("-", "").replace("NaN", "")}
                            </div>
                        </div>
                        <div className={"text-black dark:text-white"}>
                            <div>Avg/Performance</div>
                            <div className={"text-center text-3xl"}>
                                {(performance / selectedEmployees.length).toLocaleString(undefined, {maximumFractionDigits: 2}).replace("-", "").replace("NaN", "")}
                            </div>
                        </div>
                        <div className={"text-black dark:text-white"}>
                            <div>Avg/Attendance</div>
                            <div className={"text-center text-3xl"}>
                                {(attendance / selectedEmployees.length).toLocaleString(undefined, {maximumFractionDigits: 2}).replace("-", "").replace("NaN", "")}%
                            </div>
                        </div>
                    </div>
                </div>
                <input id={"teamName"} className={"text-black rounded-full w-full capitalize mb-3"} type={"text"} value={teamName}
                       placeholder={"Please enter a team name..."} onChange={(e) => {
                    setTeamName(e.target.value)
                }}/>
                <a className={"text-black dark:text-white mb-5 mt-1 underline font-light block cursor-pointer text-xs w-full text-center"} onClick={() => {
                    generateRandomTeamName()
                }}>Generate a random team name for me.</a>

                <div className={"mt-12 mb-12 text-xs"}>
                    <p className={"text-xl font-light mb-5"}>Employees on team:</p>
                    {selectedEmployees.map((person, i) => {
                    return (
                        <div className={"mb-3"} key={i}>
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
                <button className={"text-white bg-violet-700 p-3 rounded-full w-80"} onClick={() => {
                    if (teamName === "") {
                        alert("Please enter a unique team name.")
                    } else if (selectedEmployees.length < 2) {
                        alert("Please select at least 2 team members.")
                    } else {
                        createTeam({
                            name: teamName,
                            kpi: KPI,
                            attendance: attendance,
                            wages: wages,
                            performance: performance,
                            members: selectedEmployees,
                            orgId: orgId
                        })
                        if(!alert("Team " + teamName + " was added with " + selectedEmployees.length + " members!")){
                            window.location.reload()
                        }
                    }

                }}>
                    Create team
                </button>
            </div>
        </div>
    )
}
