import dotenv from 'dotenv'

dotenv.config()

export const EXTERNAL_API_URL = process.env.EXTERNAL_API_URL || 'https://echo-serv.tbxnet.com/v1/secret'
export const API_KEY = process.env.API_KEY || 'Bearer aSuperSecretKey'
export const PORT = process.env.PORT || 3000
