import express from 'express';

import authRoute from "./Auth";
import productRoute from "./product";
import supplierRoute from "./supplier";
import stripeRoute from "./stripe";
import ordersRoute from "./order";

const indexRouter = express();

indexRouter.use("/api/auth", authRoute);
indexRouter.use("/api/products", productRoute);
indexRouter.use("/api/supplier", supplierRoute);
indexRouter.use("/api/checkout", stripeRoute);
indexRouter.use("/api/orders", ordersRoute);

export default indexRouter;