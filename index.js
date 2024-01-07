import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./src/database/dbconnect";
import authRoute from "./src/routes/Auth";
import productRoute from "./src/routes/product";
import supplierRoute from "./src/routes/supplier";
import stripeRoute from "./src/routes/stripe";
import ordersRoute from "./src/routes/order";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDb();
app.listen(process.env.PORT || 3000, () => {
  console.log(`Backend server is running on ${process.env.PORT}`);
});

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/supplier", supplierRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/orders", ordersRoute);
