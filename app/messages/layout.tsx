import { ReactNode } from "react"
import { unstable_noStore } from "next/cache"
import { Message } from "@/lib/types"
import styles from './page.module.scss'

// export const dynamic = "force-dynamic"
export default async function MessageLayout({ children }: { children: ReactNode }) {
  //unstable_noStore()
  const response = await fetch("http://localhost:8080/messages", {
    cache: "force-cache"
  })

    const messages: Message[] = await response.json()

    return (
      <main className="main">
        <section className={styles.header}>
          <h1>Important Messages</h1>
          <h3>{messages.length} messages found</h3>
          {children}
        </section>
      </main>
    );
}