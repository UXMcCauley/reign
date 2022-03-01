import Head from 'next/head'
import Layout, {ContentContainer} from "../components/universal/ui/layout"
import DataTable from 'react-data-table-component';
import {generateEmployees, employeeTableColumns} from "../../public/helpers";
import styles from "./Home.module.scss"

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN - Employees</title>
                <meta name="description" content="REIGN Analytics and Employee Management Software"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <ContentContainer>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>Employees</h1>
                    </div>
                    <DataTable
                        columns={employeeTableColumns()}
                        data={generateEmployees().data}
                        theme="default"
                        pagination
                        selectableRows
                        persistTableHead
                    />
                </div>
            </ContentContainer>

        </Layout>
    )
}
