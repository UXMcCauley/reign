import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import SingleHelpItem from "../../components/HelpCenter/SingleHelpItem";
import styles from "./HelpCenter.module.scss"


export default function HelpCenter(props) {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Help</title>
                <meta name="description" content=" Help Center"/>
            </Head>
            <ContentContainer>
                <div className={styles.container}>
                    <div className={styles.innerContent}>
                        {
                            props.qna.records.map(q => {
                                return <SingleHelpItem key={q.id}
                                                       question={q.fields.Question}
                                                       tag={q.fields.Category}
                                                       answer={q.fields.Answer}/>
                            })
                        }
                    </div>


                </div>
            </ContentContainer>
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
