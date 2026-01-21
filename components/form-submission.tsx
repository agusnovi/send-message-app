'use client'
import { useFormStatus } from "react-dom"

export default function FormSubmission() {
    const { pending } = useFormStatus()
    return <button disabled={pending}>{pending ? "Sending....." : "Send"}</button>
}