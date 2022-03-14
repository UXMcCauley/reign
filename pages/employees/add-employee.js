import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import AddEmployeeForm from "../../components/employees/addEmployeeForm";
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";

const orgURL = "61bf60ecddd910d9c0a18df1"

export default function AddEmployee({currentOrg}) {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="Add EmployeeId"/>
            </Head>
            <ContentContainer>
                <AddEmployeeForm currentOrg={currentOrg[0].name}/>
            </ContentContainer>
        </>
    )
}

export async function getServerSideProps({req}) {

    const {db} = await connectToDatabase()

    const currentOrg = await db
        .collection("organizations")
        .find({"_id": ObjectId(orgURL)})
        .toArray()

    const returnData = JSON.stringify(currentOrg)
    return {
        props: {
            currentOrg: JSON.parse(returnData)
        }
    }
}
