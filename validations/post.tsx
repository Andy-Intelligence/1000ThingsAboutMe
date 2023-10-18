import * as z from 'zod'

export const PostValidation = z.object({
    // profile_photo: z.string().url().nonempty(),
    chapterHeader:z.string().nonempty(),
    text:z.string().nonempty(),
})
