import Product from "../model/Product";
import cloudinary from "../helpers/cloudinary";

class ProductController{
    static async createProduct (req,res){
        const image = await cloudinary.uploader.upload(req.file.path)
        try {
           const newProduct = await new Product({
                title:req.body.title,
                description:req.body.description,
                image: image.secure_url,
                price:req.body.price,
                color:req.body.color,
                categories:req.body.categories,
                inStock:req.body.inStock,
           });
           const product = await newProduct.save() 
           res.status(201).json(product);
        } catch (error) {
           res.status(401).json({error:error.message}); 
        }
    }
}

export default ProductController;