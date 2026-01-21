import MessageItem from "@/components/message-item"
import { getMessages } from "@/messages"
import { Message } from "@/lib/types"
import styles from './page.module.scss'

export default async function MessagesPage() {
    const messages: Message[] = await getMessages()

    if(!messages || messages.length === 0) return <p>No messages found!</p>

    return (
      <div className={styles.grid}>
        {
          messages.map((message: Message) => (
            <MessageItem key={message.id} {...message} />
          ))
        }
      </div>
    );
}