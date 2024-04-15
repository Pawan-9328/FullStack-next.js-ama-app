import {z} from 'zod'


export const usernameValidation = z
// username check 
.string()
.min(2, "Username must be atleast 2 characters")
.max(20, "Username must be no more than 20 characters")
.regex(/^[a-zA-Z0-9_]+$/ , "Username must not contain special charater")

// object used - because we check multiple items 
export const singnUpSchema = z.object({
     username: usernameValidation,
     // check email 
     email: z.string().email({message: 'Invalid email address'}), 
     password: z.string().min(6, {message: "password be at least 6 characters"})

})