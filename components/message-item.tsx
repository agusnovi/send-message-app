import styles from "./message-item.module.scss"
export default function MessageItem({ id, text }: { id: number; text: string }) {
  return <div className={styles.text}>{text}</div>;
}