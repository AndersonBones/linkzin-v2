import mongoose from 'mongoose'
import { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'

dotenv.config()


export const ConnectDB =async (req:Request, res:Response, next:NextFunction) => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string)

        console.log('database connected successfully')

        next();
    } catch (error) {
        console.log('Erro ao conectar com banco de dados...')
    }
}