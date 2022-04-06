import Head from 'next/head'
import {useState} from "react";
import KeycardListItem from "../../components/keycards/Keycard";
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";

export default function Index({keycards}) {
    const [keycardsList, setKeycardsList] = useState(keycards)
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Keycards</title>
                <meta name="description" content="Keycards List"/>
            </Head>
            <SingleColumnLayout>

                <div className={"p-3"}>
                    <ul className={"list-none"}>
                        {
                            keycardsList && keycardsList.map((card, i) => {
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
