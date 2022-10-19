import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./database/dbconnect";
import authRoute from "./routes/Auth";
import productRoute from "./routes/product";
import supplierRoute from "./routes/supplier";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

connectDb();
app.listen(process.env.PORT || 3000,() => {
    console.log(`Backend server is running on ${process.env.PORT}`)
});

app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);
app.use("/api/supplier",supplierRoute);