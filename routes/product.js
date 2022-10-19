import express from "express";
import ProductController from "../controllers/product";
import  upload  from "../helpers/multer";
import { verifyTokenAndClient,verifyTokenAndAdmin } from "../middlewares/verify";

const route = express.Router();

route.post("/create",verifyTokenAndClient,upload.single('image'),ProductController.createProduct);
route.get("/",ProductController.getAllProducts);
route.delete('/delete/:id',ProductController.deleteProduct);
route.put('/update/:id',ProductController.updateProduct);
route.get('/singleProduct/:id',ProductController.getSingleProduct);

export default route;