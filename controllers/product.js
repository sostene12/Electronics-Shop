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
    static async getProduct(req,res){
        Product.find().sort({createdAt:-1})
        .then((result)=>{
            res.json(result);
        })
        .catch((error=>{
            res.status(401).json({error:error.message});
        }))
    }
    static async deleteProduct(req,res){
        Product.findByIdAndDelete(req.params.id)
        .then((result)=>{
            res.json();
        })
        .catch(error=>{
            res.status(401).json({error:error.message});
        })
    }
}

export default ProductController;