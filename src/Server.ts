import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './routes/Routes'
import cors from'cors'
import { Request,Response } from 'express'

const app = express();
dotenv.config()

app.use(cors())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')))

app.use(router);

app.use((req:Request, res:Response)=>{
    res.render('pages/404')
});

app.listen(process.env.PORT, function(){
    console.log('Server running...')
  });
