import Head from 'next/head'
import ContentContainer from "../../components/universal/ContentContainer"
import MessagingAll from "https://framer.com/m/MessagingAll-3nAu.js@6vypzvNu3yueotn1gHCl"
import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";

export default function Index() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Messages</title>
                <meta name="description" content="Messages"/>
            </Head>
            <SingleColumnLayout>
                <MessagingAll/>
            </SingleColumnLayout>
        </>
    )
}
