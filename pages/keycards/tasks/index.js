import Head from 'next/head'
import Layout from "../../../components/universal/ui/layout";
import DashboardTitle from "../../../components/dashboards/dashboardTitle";
import {ContentContainer} from "../../../components/universal/ui/layout";
import IconButton from "../../../components/universal/ui/iconButton";
import DataTable from "react-data-table-component";
import {keycardsTableColumns} from "../../../lib/helpers";
import ButtonFlex from "../../../components/universal/ui/buttonFlex";
import BackButton from "../../../components/universal/ui/backButton";

export default function Home(props) {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN - Tasks"/>
            </Head>
            <DashboardTitle label={"Tasks"} icon={"Key"}/>
            <ContentContainer>
                <ButtonFlex>
                    <BackButton/>
                    <IconButton icon={"add"} label={"Add a new task"} size={30} link={"/keycards"}/>
                </ButtonFlex>
                <DataTable
                    columns={keycardsTableColumns()}
                    data={props.data}
                    theme="default"
                    pagination
                    selectableRows
                    persistTableHead
                />
            </ContentContainer>
        </Layout>
    )
}

export async function getServerSideProps({req}) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    const res = await fetch(baseUrl + '/api/keycards')
    const data = await res.json()
    return {props: {data}}
}