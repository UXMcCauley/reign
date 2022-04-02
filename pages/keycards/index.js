import Head from 'next/head'
import ContentContainer from "../../components/universal/ContentContainer"
import {customTableStyles, keycardsTableColumns} from "../../lib/helpers";
import DataTable from "react-data-table-component";
import IconButton from "../../components/ui/iconButton";
import ButtonFlex from "../../components/ui/buttonFlex";
import styles from "./styles/AllKeycards.module.scss";
import {useState} from "react";
import KeycardListItem from "../../components/keycards/Keycard";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";

export default function Index({keycards}) {
    const [searchTerm, setSearchTerm] = useState("")
    const [keycardsList, setKeycardsList] = useState(keycards)
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Keycards</title>
                <meta name="description" content="Keycards List"/>
            </Head>
            <SingleColumnLayout>

                <div className={styles.container}>
                    <ul className={styles.keycardList}>
                        {
                            keycardsList.map((card, i) => {
                                return <KeycardListItem key={i} card={card}/>
                            })
                        }
                    </ul>

                </div>
            </SingleColumnLayout>
        </>
    )
}

export async function getServerSideProps({req}) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    const res = await fetch(baseUrl + '/api/all/keycards')
    const data = await res.json()
    return {props: {keycards: data}}
}
