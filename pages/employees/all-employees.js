import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import DataTable from 'react-data-table-component';
import {employeeTableColumns, customTableStyles} from "../../lib/helpers";
import styles from "./styles/Employees.module.scss"
import {useState} from "react";

export default function AllEmployees({employees}) {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Employees</title>
                <meta name="description" content="Employees"/>
            </Head>
            <ContentContainer>
                <input type={"text"}
                       className={styles.searchField}
                       value={searchTerm}
                       placeholder={"Search employees by last or first name..."}
                       onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}/>
                <div className={styles.tableContainer}>
                    <DataTable
                        columns={employeeTableColumns()}
                        data={employees.filter((item) => {
                            if (searchTerm === "") {
                                return item;
                            } else if (
                                item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                item.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return item;
                            }
                        })}
                        theme="dark"
                        dense={false}
                        pagination
                        selectableRows
                        persistTableHead
                        customStyles={customTableStyles}
                    />
                </div>
            </ContentContainer>
        </>
    )
}

export async function getServerSideProps({req}) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    const res = await fetch(baseUrl + '/api/employees')
    const data = await res.json()
    return {props: {employees: data}}
}
