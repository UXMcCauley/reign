import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DataTable from 'react-data-table-component';
import {generateEmployees, employeeTableColumns} from "../../public/helpers";
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import ContentLayoutContainer from "../../components/ContentLayoutContainer";
import Link from "next/link"
import {PlusCircle} from "phosphor-react";

import styles from "./Employees.module.scss"

export default function Employees() {
    return (
        <Layout>
            <Head>
                <title>REIGN - Employees</title>
                <meta name="description" content="REIGN Analytics and Employee Management Software"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <DashboardTitle label={"Employees"} icon={"Person"}/>
            <ContentContainer>
                <ContentLayoutContainer>
                    <div className={styles.stack}>
                        <div className={styles.addNewEmployeeContainer}>
                            <Link href={"/"} passHref>
                                <div className={styles.addFlex}>
                                    <div className={styles.addNewEmployee}>
                                        <PlusCircle size={30}/>
                                        <div>Add a new employee</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.tableContainer}>
                            <DataTable
                                columns={employeeTableColumns()}
                                data={generateEmployees().data}
                                theme="default"
                                pagination
                                selectableRows
                                persistTableHead
                            />
                        </div>
                    </div>
                </ContentLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}
