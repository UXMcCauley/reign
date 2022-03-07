import Head from 'next/head'
import Layout, {ContentContainer} from "../../components/universal/layout"
import {keycardsTableColumns} from "../../lib/helpers";
import DataTable from "react-data-table-component";
import IconButton from "../../components/universal/ui/iconButton";
import ButtonFlex from "../../components/universal/ui/buttonFlex";

export default function Home(props) {
    return (
        <Layout>
            <Head>
                <title>REIGN Workforce Intelligence - Keycards</title>
                <meta name="description" content="Keycards List"/>
            </Head>
            <ContentContainer>
                <ButtonFlex>
                    <IconButton icon={"eye"} label={"View all tasks"} size={30} link={"/keycards/tasks"}/>
                    <IconButton icon={"add"} label={"Add a new keycard"} size={30} link={"/keycards/add-new-keycard"}/>
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
    return { props: { data } }
}
