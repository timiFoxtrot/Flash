import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT
const secret = process.env.JWT_SECRET

export {
    port,
    secret
}