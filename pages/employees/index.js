import Head from 'next/head'
import {useState} from "react";
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";
import EmployeeTable from "../../components/ui/EmployeeTable";
import LayoutWithSearch from "../../components/layouts/LayoutWithSearch";
import EmployeeCompareFlyin from "../../components/ui/EmployeeCompareFlyin";
const orgURL = "61bf60ecddd910d9c0a18df1"

export default function Index({employees}) {
    const empData = JSON.parse(employees)
    const [flyIn, setFlyIn] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedEmployees, setSelectedEmployees] = useState([])
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Employees</title>
                <meta name="description" content="Employees"/>
            </Head>
            <LayoutWithSearch setSearchTerm={setSearchTerm}>
                <EmployeeCompareFlyin flyIn={flyIn} setFly={setFlyIn} selectedEmployees={selectedEmployees}/>
                <div className={`max-w-8xl mx-auto sm:px-6 lg:px-8 border-b mb-10 border-gray-800 divide-gray-800 ${selectedEmployees.length ? "visible" : "hidden"}`}>
                    <h1 className={"mb-1"}>Compare Employees</h1>
                    <ul role="list" className="divide-y divide-gray-800">
                        {selectedEmployees.map((item) => (
                            <li key={item.id} className="py-4">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <EmployeeTable
                    setFly={setFlyIn}
                    searchTerm={searchTerm}
                    selectedEmployees={selectedEmployees}
                    setSelectedEmployees={setSelectedEmployees}
                    people={employees}
                    title={"Employees"}
                    desc={"List of all employees in your organization."}
                    heads={["Last", "First", "Cell", "KPI", "Performance", "Attendance", "RTR"]}
                    buttonLabel={"Add employee"}
                    linkLabel={"Real-Time Resume"}/>
            </LayoutWithSearch>
        </>
    )
}

export async function getServerSideProps({req}) {

    const {db} = await connectToDatabase()
    const employees = await db
        .collection("employees")
        .find({"organization": ObjectId(orgURL)})
        .toArray()

    const returnData = JSON.stringify(employees)

    return {
        props: {
            employees: returnData,
        }
    }
}
