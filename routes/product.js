import express from "express";
import ProductController from "../controllers/product";
import  upload  from "../helpers/multer";
import { verifyTokenAndClient } from "../middlewares/verify";

const route = express.Router();

route.post("/create",verifyTokenAndClient,upload.single('image'),ProductController.createProduct);
route.get("/",ProductController.getProduct);
route.delete('/delete/:id',ProductController.deleteProduct);

export default route;