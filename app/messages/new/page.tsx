'use client'
import FormSubmission from "@/components/form-submission"
import { useActionState } from "react"
import { createPost } from "@/actions/messages"
import styles from './page.module.scss'

export default function NewMessage() {
  const [state, formAction] = useActionState(createPost, { error: '' });

  return (
    <>
      <h1>New Message</h1>
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