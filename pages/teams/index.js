import LayoutWithSearch from "../../components/layouts/LayoutWithSearch";
import EmployeeTable from "../../components/ui/EmployeeTable";
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";
import {useState} from "react";
import EmployeeCompareFlyin from "../../components/ui/EmployeeCompareFlyin";

const orgURL = "61bf60ecddd910d9c0a18df1"

function Index({employees}) {
    const [flyIn, setFlyIn] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedEmployees, setSelectedEmployees] = useState([])
    return (
        <LayoutWithSearch>
            <EmployeeCompareFlyin flyIn={flyIn} setFly={setFlyIn} selectedEmployees={selectedEmployees}/>
            <div className={`max-w-8xl mx-auto sm:px-6 lg:px-8 border-b mb-10 border-gray-200 divide-gray-200 dark:border-gray-800 dark:divide-gray-800 ${selectedEmployees.length ? "visible" : "hidden"}`}>
                <h1 className={"mb-1 text-black dark:text-white"}>Compare Employees</h1>
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-800">
                    {selectedEmployees.map((item) => (
                        <li key={item.id} className="py-4 text-black dark:text-white">
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
                title={"Teams"}
                desc={"List of all the teams you've created."}
                heads={["Last", "First", "Cell", "KPI", "Performance", "Attendance", ""]}
                buttonLabel={"Add team"}
                buttonLink={"/teams/add"}
                linkLabel={"View team"}/>
        </LayoutWithSearch>
    );
}

export default Index;
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
