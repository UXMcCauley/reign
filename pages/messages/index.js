import Head from 'next/head'
import ContentContainer from "../../components/universal/layout"
import ButtonFlex from "../../components/universal/ui/buttonFlex";
import IconButton from "../../components/universal/ui/iconButton";
import styles from "./styles/Messages.module.scss"
import MessagePreview from "../../components/messages/messagePreview";
import {useState} from "react";
import { Scrollbar } from "react-scrollbars-custom";
import MessagePane from "../../components/messages/messagePane";

export default function Messages() {

    const messages = [
        {
            sender: "Hank Hill",
            received: "April 2, 2022 4:04PM",
            message: "Vitae sint rerum aliquid consequatur rerum vero est. Sit dolorum et tenetur sit. Illo numquam recusandae id omnis quia omnis commodi corporis nihil. Repudiandae et ipsa excepturi vel quaerat. Voluptatem quaerat natus hic et accusantium quia voluptatem. Officia corrupti adipisci alias. Est quisquam ut aperiam sequi quis. Nihil et omnis. Facere sunt ea repellat veritatis doloremque consectetur consequatur adipisci quam. Est beatae qui perferendis eligendi delectus facere quia facilis iure. Rem aut aspernatur. Est non autem fuga quod cum non dolore. Similique sit nihil deserunt sit eum porro debitis. At ut vitae. Similique minima ducimus sunt. Aut animi laboriosam nostrum modi. Eveniet est molestiae ea.",
            read: false,
            urgent: true,
            flagged: false
        },
        {
            sender: "Homer Simpson",
            received: "April 1, 2022 7:07AM",
            message: "Quia occaecati alias fugit eos consequatur quae voluptatibus. Et dolorem recusandae odit qui velit. Aliquid et atque et est fugit suscipit. Aliquid veritatis repudiandae perferendis consequatur. Quia sint esse unde commodi vitae aut. Sit facere magnam voluptate eos asperiores sit. Libero quasi commodi fugiat similique est. Hic laboriosam deleniti. Repellendus nemo est. Et provident aliquam distinctio itaque nemo voluptas. Blanditiis molestiae ab ad nisi repudiandae. Earum consequuntur non non. Ut repellendus consequatur ut nisi et. Ut velit quo voluptatibus non consequuntur quae amet cum suscipit. Vero modi explicabo perspiciatis.",
            read: false,
            urgent: false,
            flagged: false
        },
        {
            sender: "William H. Macy",
            received: "March 22, 2022 2:23PM",
            message: "Incidunt nulla aspernatur voluptatem porro. Et mollitia dicta ex minima nam. Minima expedita voluptas suscipit architecto. Suscipit fugiat rerum omnis voluptatum. Similique et omnis accusantium eos explicabo eos aut. Id eum facere quo. Et deleniti rerum officiis voluptas quod. Exercitationem sapiente soluta ea est autem. Voluptatibus quaerat aut. Recusandae cupiditate tempore repellat nisi veniam. Voluptas iure tenetur alias architecto delectus vel. Iste mollitia id enim. Consequatur ea perferendis ad qui corporis iure. Est voluptas suscipit est aut et quo in ut nihil.",
            read: false,
            urgent: true,
            flagged: true
        },
        {
            sender: "Dog Bountyhunter",
            received: "March 19, 2022 4:21PM",
            message: "Cupiditate culpa nam aut. Illo veniam aut atque aut voluptas. Possimus omnis minima fugit adipisci dolore tempore. Earum voluptates delectus dolores modi provident laudantium atque quia. Mollitia iure recusandae. Sit dolor dolor autem dolorum nulla voluptatem laudantium velit. Iure harum aut quasi ducimus molestias. Nobis iste autem. Magnam aut quod architecto. Veritatis tempora quis qui. Molestias consequatur accusantium. Quas iste dolor cumque voluptatem. Magni deserunt iste vel hic. Aut quo qui est maiores.",
            read: true,
            urgent: false,
            flagged: true
        },
        {
            sender: "Alfred Newman",
            received: "March 11, 2022 4:04PM",
            message: "Tenetur laboriosam iure mollitia sit et voluptatem cumque cumque. Id illo perferendis aut aut. Mollitia illum magnam magni suscipit nobis et reprehenderit. Animi impedit natus dolorem facere consequuntur. Aut nulla modi iusto itaque corporis aperiam. Ut quia soluta modi sed sed iure. Nihil nemo est exercitationem facere enim. Soluta esse occaecati enim corrupti nihil molestias illo. Officiis tempora non. At dicta labore dolorum accusantium ipsum rerum sunt. Vel modi totam ab veritatis vel eum eum eos. Eos iste nisi nihil modi ullam in eum est culpa. Velit id in et enim velit id consequuntur ad. Culpa molestiae animi similique perspiciatis. Veniam voluptatem molestiae autem repellendus odit. Debitis id vero dolorum ducimus.",
            read: true,
            urgent: false,
            flagged: false
        },
        {
            sender: "George Costanza",
            received: "March 11, 2022 4:04PM",
            message: "Quisquam deserunt eos dolorem et qui qui quo sapiente labore. Cupiditate est qui. Aut dolores id odit voluptatem. Nesciunt delectus unde ea ullam eligendi. Aut nesciunt ea quaerat veniam omnis dolor dignissimos architecto quia. Id praesentium commodi aspernatur. Incidunt quo architecto. Similique dicta aliquid. Reiciendis amet modi quo amet saepe in aut. Et quia dolor nihil et ratione aut et molestiae et. Qui architecto non nobis incidunt voluptas asperiores in.",
            read: true,
            urgent: false,
            flagged: false
        },
        {
            sender: "Original Gangsta",
            received: "March 11, 2022 4:04PM",
            message: "Ut animi quidem optio labore cum optio cupiditate quia eius. Nihil qui perspiciatis esse eaque quis iure dolorem ut. Eum quis necessitatibus culpa et sint debitis expedita magnam repellendus. Nemo pariatur ex quia magni modi in aut sit. Quaerat occaecati cumque sed at consequatur. Dolorem ut ut omnis quod facere. Doloremque est error laboriosam totam velit. Amet earum harum nemo soluta culpa ut est sapiente voluptas. Est totam consequatur et accusantium delectus. Ullam earum dolor minima velit totam. Sit esse ut natus dolorem illo autem rerum. Corrupti nam repudiandae dolores.",
            read: true,
            urgent: false,
            flagged: false
        }
    ]
    const [activeMessage, setActiveMessage] = useState(messages[0])
    const getMessageContent = (messageContent) => {
        setActiveMessage(messageContent)
    }
    return (
        <>
            <Head>
                <title>REIGN Workforce Intelligence - Messages</title>
                <meta name="description" content="Messages"/>
            </Head>
            <ContentContainer>

                <div className={styles.container}>
                    <div className={styles.messagesList}>
                        <ButtonFlex>
                            <IconButton icon={"add"} label={"Compose a Message"} link={"/"} size={30}/>
                        </ButtonFlex>
                        <Scrollbar style={{ width: 320, height: 600 }}>
                            {
                                messages.map((message, i) => {
                                    return <MessagePreview key={i}
                                                           sender={message.sender}
                                                           message={message.message}
                                                           received={message.received}
                                                           read={message.read}
                                                           getMessageContent={getMessageContent}
                                                           urgent={message.urgent}
                                                           flagged={message.flagged}
                                    />
                                })
                            }
                        </Scrollbar>
                    </div>
                    <div className={styles.previewPane}>
                        <MessagePane message={activeMessage.message}
                                     sender={activeMessage.sender}
                                     received={activeMessage.received}
                                     read={activeMessage.read}
                        />
                    </div>
                </div>
            </ContentContainer>
        </>
    )
}
