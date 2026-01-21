import { Message } from "@/lib/types"
// import { unstable_noStore } from "next/cache"
import MessageItem from "@/components/message-item"
import { getMessages } from "@/messages"
import styles from './page.module.scss'

// export const revalidate = 5;
// export const dynamic = 'force-dynamic' / 'force-static'

export default async function MessagesPage() {
    //unstable_noStore()
    // const response = await fetch('http://localhost:8080/messages', {
    //     next: {
    //         tags: ["msg"]
    //     },
    //     cache: "force-cache"
    // });
    // const messages: Message[] = await response.json()

    const messages = await getMessages()

    if(!messages || messages.length === 0) return <p>No messages found!</p>

    return (
      <div className={styles.grid}>
        {
          messages.map((message) => (
            <MessageItem key={message.id} {...message} />
          ))
        }
      </div>
    );
}