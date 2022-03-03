import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DataTable from 'react-data-table-component';
import {employeeTableColumns} from "../../lib/helpers";
import DashboardTitle from "../../components/dashboards/dashboardTitle";
import ContentLayoutContainer from "../../components/ContentLayoutContainer";
import IconButton from "../../components/universal/ui/iconButton";
import styles from "./Employees.module.scss"
import ButtonFlex from "../../components/universal/ui/buttonFlex";

export default function Employees(props) {
    console.log(props.data)
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
                        <ButtonFlex>
                            <IconButton icon={"download"} label={"Download Employees CSV"} size={30}
                                        link={"/employees/add-new-employee"}/>
                            <IconButton icon={"add"} label={"Add a new employee"} size={30}
                                        link={"/employees/add-new-employee"}/>
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