import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./database/dbconnect";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())



connectDb();
app.listen(process.env.PORT || 5000,() => {
    console.log(`Backend server is running on ${process.env.PORT}`)
});