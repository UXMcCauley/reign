import Head from 'next/head'
import AddEmployeeForm from "../../components/addEmployeeForm";
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";

const orgURL = "61bf60ecddd910d9c0a18df1"

export default function Add({currentOrg}) {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence</title>
                <meta name="description" content="Add EmployeeId"/>
            </Head>
            <SingleColumnLayout>
                <AddEmployeeForm currentOrg={currentOrg[0].name}/>
            </SingleColumnLayout>
        </>
    )
}

export async function getServerSideProps() {

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
