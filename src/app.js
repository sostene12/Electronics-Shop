import express from 'express';
import cors from "cors";

import indexRouter from './routes/indexRouter';
import { connectDb } from './database/dbconnect';

const app = express();

app.use(express.json());
app.use(cors());


connectDb();

app.get('/',(_,res)=>{
    res.status(200).json('Welcome to the backend');
})
app.use('/',indexRouter);

export default app;