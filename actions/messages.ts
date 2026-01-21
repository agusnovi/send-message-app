'use server'
import { addMessage } from "@/messages"
import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createPost(prevState: any, formData: FormData) {
    const payload = {
      message: formData.get('message'),
    }

    if (!payload.message || payload.message.toString().trim() === '' || payload.message === null) {
        return {
            error: 'invalid input.'
        }
    }
        
    await addMessage(payload.message.toString())

    //revalidatePath("/messages")
    revalidateTag("msg", "max")
    redirect("/messages")
}