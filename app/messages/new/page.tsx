'use client'
import { useActionState } from "react";
import FormSubmission from "@/components/form-submission";
import { createPost } from "@/actions/messages";
import styles from './page.module.scss';
// import { Message } from "@/lib/types";
// import { unstable_noStore } from "next/cache";

export default function NewMessage() {
  // unstable_noStore()
  const [state, formAction] = useActionState(createPost, { error: '' });
  
  // const response = await fetch("http://localhost:8080/messages")
  // const messages: Message[] = await response.json()
  //if(!messages || messages.length === 0) return <p>No messages found!</p> 

  return (
    <>
      <h1>New Message {/*messages.length*/}</h1>
      <form className={styles.form} action={formAction}>
        <label htmlFor="message">Your Message</label>
        <textarea required id="message" name="message"></textarea>
        <div className={styles.submission}>
          <FormSubmission />
        </div>
        {state.error && state.error.length > 0 && <p>{state.error}</p>}
      </form>
    </>
  );
}