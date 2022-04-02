import Head from 'next/head'
import ContentContainer from "../../components/universal/ContentContainer"
import DataTable from 'react-data-table-component';
import {employeeTableColumns, customTableStyles} from "../../lib/helpers";
import styles from "./styles/Employees.module.scss"
import {useState} from "react";
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";

const orgURL = "61bf60ecddd910d9c0a18df1"

export default function Compare({employees}) {
    const empData = JSON.parse(employees)
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Employees</title>
                <meta name="description" content="Employees"/>
            </Head>
            <ContentContainer>

            </ContentContainer>
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
