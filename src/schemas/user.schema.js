import { z } from "zod;"
 
//Definindo validação do schema do usuário//
const userSchemas = z.object({
    username: z.string().min(3, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 charactes long"),
    email: z.string.email()("Invalid email"),
    avatar: z.string().url("Invalid URL").optional()

})

export { userSchemas }