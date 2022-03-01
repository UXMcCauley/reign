import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/ui/layout"
import DataTable from 'react-data-table-component';
import {generateEmployees, employeeTableColumns} from "../../public/helpers";
import DashboardTitle from "../../components/dashboards/dashboardTitle";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>REIGN - Employees</title>
                <meta name="description" content="REIGN Analytics and Employee Management Software"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <DashboardTitle label={"Employees"} icon={"Person"}/>
            <ContentContainer>
                    <DataTable
                        columns={employeeTableColumns()}
                        data={generateEmployees().data}
                        theme="default"
                        pagination
                        selectableRows
                        persistTableHead
                    />
            </ContentContainer>
        </Layout>
    )
}
