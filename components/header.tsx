'use client'
import Link from "next/link"
import { useState } from "react"
import cs from "classnames"
import styles from "./header.module.scss"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
      <>
        <div className={styles['mobile-grid']}>
          <Link href="/">NextCaching</Link>
          <button type="button" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#ffffff"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
        <nav className={cs(styles.nav, open && styles.show)}>
          <ul>
            <li className={styles["close-sidebar"]}>
              <button type="button" onClick={() => setOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#000000"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </li>
            <li className={styles.logo}>
              <Link href="/" onNavigate={() => setOpen(false)}>
                NextCaching
              </Link>
            </li>
            <li>
              <Link href="/messages" onNavigate={() => setOpen(false)}>
                Messages
              </Link>
            </li>
            <li>
              <Link href="/messages/new" onNavigate={() => setOpen(false)}>
                New Message
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={styles.backdrop}
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      </>
    );
}