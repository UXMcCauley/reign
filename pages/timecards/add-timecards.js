import {useEffect, useState} from "react"
import faker from "@faker-js/faker";

// import my components
import styles from "../../styles/SignIn.module.scss"
import DataTable from "react-data-table-component";


const tableOptions = [
    {name: 'Name', selector: row => row.employeeName, sortable: true, width: "150px"},
    {
        name: 'Punches', cell:
            (row) => row.punches.map((punch, i) => <span style={{display: "block", width: "100%"}}
                                                         key={i}>{punch.keycard} | {punch.task} | {punch.time}</span>)
    },
    {name: 'Status', selector: row => row.approvalStatus.toString(), width: "100px"},
    {name: 'Total', selector: row => row.totalHours.toString(), width: "70px"},
    {name: 'Rating', selector: row => row.performanceRating, sortable: true, width: "70px"},
    {name: 'Project', selector: row => row.project, width: "170px"},
    {name: 'Note', selector: row => row.employeeNotes},
]

export default function SignIn() {
    const [timecardGroup, setTimecardGroup] = useState([])
    const timecards = []
    const sendTimecards = async () => {
        await fetch('/api/addTimecards', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: timecardGroup
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        for (let i = 0; i < 50; i++) {
            let date = faker.date.recent(10)
            timecards.push({
                id: faker.datatype.uuid(),
                employeeName: faker.name.firstName() + " " + faker.name.lastName(),
                punches: [
                    {
                        keycard: faker.helpers.randomize(["Concrete", "HVAC", "Framing", "General Labor", "Residential Roofing"]),
                        task: faker.helpers.randomize(["Setup", "Material Handling", "Clean-up"]),
                        time: faker.helpers.randomize([1, 2, 3, 4]),
                        timeStart: date,
                        timeEnd: date
                    },
                    {
                        keycard: faker.helpers.randomize(["Concrete", "HVAC", "Framing", "General Labor", "Residential Roofing"]),
                        task: faker.helpers.randomize(["Setup", "Material Handling", "Clean-up"]),
                        time: faker.helpers.randomize([1, 2, 3, 4]),
                        timeStart: date,
                        timeEnd: date
                    },
                    {
                        keycard: faker.helpers.randomize(["Concrete", "HVAC", "Framing", "General Labor", "Residential Roofing"]),
                        task: faker.helpers.randomize(["Setup", "Material Handling", "Clean-up"]),
                        time: faker.helpers.randomize([1, 2, 3, 4]),
                        timeStart: date,
                        timeEnd: date
                    },
                    {
                        keycard: faker.helpers.randomize(["Concrete", "HVAC", "Framing", "General Labor", "Residential Roofing"]),
                        task: faker.helpers.randomize(["Setup", "Material Handling", "Clean-up"]),
                        time: faker.helpers.randomize([1, 2, 3, 4]),
                        timeStart: date,
                        timeEnd: date
                    }
                ],
                approvalStatus: faker.helpers.randomize(["False", "True", "Flagged", "Rejected"]),
                project: faker.lorem.words(3),
                totalHours: faker.helpers.randomize([7, 8, 9, 10]),
                performanceRating: 0,
                employeeNotes: faker.lorem.paragraph(),
                managerNotes: "",
            })
        }
        setTimecardGroup(timecards)

    }, [])

    return (
        <>
            <div className={styles.container} style={{overflow: "scroll", height: "auto"}}><button onClick={() => {
                sendTimecards()
            }}>Send Timecards</button>
                <DataTable columns={tableOptions}
                           data={timecardGroup}
                           dense={false}
                           theme={"dark"}
                />

            </div>
        </>
    )
}
