import express from "express";
import ProductController from "../controllers/product";
import  upload  from "../helpers/multer";
import { verifyTokenAndClient,verifyTokenAndSupplier } from "../middlewares/verify";

const route = express.Router();

route.post("/create",verifyTokenAndSupplier,upload.single('image'),ProductController.createProduct);
route.get("/",ProductController.getAllProducts);
route.delete('/delete/:id',ProductController.deleteProduct);
route.put('/update/:id',ProductController.updateProduct);
route.get('/:id',ProductController.getSingleProduct);

export default route;