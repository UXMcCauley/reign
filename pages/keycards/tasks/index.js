import Head from 'next/head'
import ContentContainer from "../../../components/ContentContainer";
import IconButton from "../../../components/iconButton";
import DataTable from "react-data-table-component";
import {keycardsTableColumns} from "../../../lib/helpers";
import ButtonFlex from "../../../components/buttonFlex";
import BackButton from "../../../components/backButton";

export default function Home(props) {
    return (
        <>
            <Head>
                <title>REIGN Workforce Analytics</title>
                <meta name="description" content="REIGN - Tasks"/>
            </Head>
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
        </>
    )
}

export async function getServerSideProps({req}) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    const res = await fetch(baseUrl + '/api/keycards')
    const data = await res.json()
    return {props: {data}}
}
