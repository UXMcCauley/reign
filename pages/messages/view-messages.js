import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import MessagingAll from "https://framer.com/m/MessagingAll-3nAu.js@6vypzvNu3yueotn1gHCl"

export default function ViewMessages() {
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Messages</title>
                <meta name="description" content="Messages"/>
            </Head>
            <ContentContainer>
                <MessagingAll/>
            </ContentContainer>
        </>
    )
}
