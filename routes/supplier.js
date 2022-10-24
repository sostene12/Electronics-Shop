import express from "express";
import SupplierController from "../controllers/supplier";
import  upload  from "../helpers/multer";
import { verifyTokenAndSupplier } from "../middlewares/verify";

const route = express.Router();

route.post("/create",verifyTokenAndSupplier,upload.single('image'),SupplierController.createProduct);
route.get("/",SupplierController.getAllProducts);
route.delete('/delete/:id',SupplierController.deleteProduct);
route.put('/update/:id',SupplierController.updateProduct);
route.get('/singleProduct/:id',SupplierController.getSingleProduct);
route.get('/getProduct',verifyTokenAndSupplier,SupplierController.getByUserId);

export default route;