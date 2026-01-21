import { ReactNode } from "react"
import { getMessages } from "@/messages"
import { Message } from "@/lib/types"
import styles from './page.module.scss'

export default async function MessageLayout({ children }: { children: ReactNode }){
  const messages: Message[] = await getMessages();

  return (
    <main className="main">
      <section className={styles.header}>
        <h1>Important Messages</h1>
        <h3>{messages.length} messages found</h3>
        {children}
      </section>
    </main>
  );
};