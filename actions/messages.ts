'use server'
import { addMessage } from "@/messages"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createPost(prevState: any, formData: FormData) {
    const message = formData.get('message')

    if (!message || message.toString().trim() === '' || message === null) {
        return {
            error: 'invalid input.'
        }
    }
        
    addMessage(message.toString())

    revalidateTag('messages', 'max');
    redirect("/messages")
}