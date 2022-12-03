import express from "express";
import cors from "cors";
import slash from "express-slash";
import dotenv from "dotenv";
import connectDb from "./database/dbconnect";
import authRoute from "./routes/Auth";
import productRoute from "./routes/product";
import supplierRoute from "./routes/supplier";
import stripeRoute from "./routes/stripe";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
app.use(slash());

connectDb();
app.listen(process.env.PORT || 3000,() => {
    console.log(`Backend server is running on ${process.env.PORT}`)
});

app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);
app.use("/api/supplier",supplierRoute);
app.use("/api/checkout",stripeRoute);