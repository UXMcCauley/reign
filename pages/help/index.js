import Head from 'next/head'
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import HelpGrid from "../../components/HelpCenter/HelpGrid";
import LayoutWithSearch from "../../components/layouts/LayoutWithSearch";

export default function HelpCenter(props) {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Help</title>
                <meta name="description" content=" Help Center"/>
            </Head>
            <LayoutWithSearch>
                <HelpGrid qna={props.qna}/>
            </LayoutWithSearch>
        </>
    )
}

export async function getServerSideProps() {
    // set up variables
    const url = "https://api.airtable.com/v0/"
    const app = "apppbpS0rK10adQYh/"
    const key = "?api_key=keyYCtVdqu5KWRkCr&view="

    // fetch data
    const questions = await fetch(url + app + "HelpCenter" + key)

    // cast data to json
    const qna = await questions.json()

    // return data as component props on render
    return {props: {qna}}
}
