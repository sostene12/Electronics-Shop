import express from "express";
import ProductController from "../controllers/product";
import  upload  from "../helpers/multer";
import { verifyTokenAndClient } from "../middlewares/verify";

const route = express.Router();

route.post("/create",verifyTokenAndClient,upload.single('image'),ProductController.createProduct);
route.get("/",ProductController.getAllProducts);
route.delete('/delete/:id',ProductController.deleteProduct);
route.patch('/update/:id',ProductController.updateProduct);

export default route;