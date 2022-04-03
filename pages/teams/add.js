import LayoutWithSearch from "../../components/layouts/LayoutWithSearch";
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";
import {useState} from "react";
import TeamsEmployeeList from "../../components/teams/TeamsEmployeeList";

const orgURL = "61bf60ecddd910d9c0a18df1"

function Add({employees}) {
    const [flyIn, setFlyIn] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedEmployees, setSelectedEmployees] = useState([])
    return (
        <LayoutWithSearch>
            <TeamsEmployeeList employees={employees}/>
        </LayoutWithSearch>
    );
}

export default Add;

export async function getServerSideProps({req}) {

    const {db} = await connectToDatabase()
    const employees = await db
        .collection("employees")
        .find({"organization": ObjectId(orgURL)})
        .toArray()

    const returnData = JSON.stringify(employees)

    return {
        props: {
            employees: JSON.parse(returnData),
        }
    }
}
