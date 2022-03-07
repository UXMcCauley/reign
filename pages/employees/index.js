import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/layout"
import DataTable from 'react-data-table-component';
import {employeeTableColumns} from "../../lib/helpers";
import ContentLayoutContainer from "../../components/universal/ContentLayoutContainer";
import IconButton from "../../components/universal/ui/iconButton";
import styles from "./styles/Employees.module.scss"
import ButtonFlex from "../../components/universal/ui/buttonFlex";
import AddEmployeeForm from "../../components/employees/addEmployeeForm";
import {useState} from "react";

export default function Employees(props) {
    const [open, setOpen] = useState("closed")
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Intelligence - Employees</title>
                <meta name="description" content="Employees"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <ContentContainer>
                <ContentLayoutContainer>
                    <div className={styles.stack}>
                        {open}
                        <ButtonFlex>
                            <IconButton icon={"download"} label={"Download Employees CSV"} size={30}
                                        link={"/employees/add-employee"}/>

                            <button onClick={() => {
                                setOpen(open === "closed" ? "open" : "closed")
                            }}>Open Me
                            </button>
                        </ButtonFlex>
                        <div className={styles.tableContainer}>
                            <DataTable
                                columns={employeeTableColumns()}
                                data={props.data}
                                theme="default"
                                pagination
                                selectableRows
                                persistTableHead
                            />
                        </div>
                    </div>
                    <AddEmployeeForm open={open}/>
                </ContentLayoutContainer>
            </ContentContainer>
        </Layout>
    )
}

export async function getServerSideProps({req}) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    const res = await fetch(baseUrl + '/api/employees')
    const data = await res.json()
    return {props: {data}}
}
