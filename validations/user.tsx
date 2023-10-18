import * as z from "zod"


export const UserValidation = z.object({
    name:z.string(),
    username:z.string().nonempty(),
    profile_photo:z.string().url().nonempty(),
    bio:z.string()
})