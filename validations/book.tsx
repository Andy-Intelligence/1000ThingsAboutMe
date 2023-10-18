import * as z from 'zod'

export const BookValidation = z.object({
    // profile_photo: z.string().url().nonempty(),
    name:z.string().nonempty(),
    caption:z.string().nonempty(),
})
