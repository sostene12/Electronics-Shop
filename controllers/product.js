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
    static async getAllProducts(req,res){
        try {
            const products = await Product.find().sort({createdAt:-1});
            res.status(200).json(products);
        } catch (error) {
            res.status(404).json({error:error.message})
        }
    }
    static async deleteProduct(req,res){
        try {
            await Product.findByIdAndDelete({_id:req.params.id});
            res.status(200).json("Product deleted");
        } catch (error) {
            res.status(401).json({error:error.message});
        }
    }
    static async updateProduct(req,res){
        const product = await Product.findById(req.params.id)
        console.log(product)
        const updates = Object.keys(req.body)
        const allowedUpdates = ['title', 'description', 'image','price','color','size','categories','inStock'];
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid Update!' })
        }
        try {
            updates.forEach((update) => product[update] = req.body[update])
            await product.save()
            res.status(200).json("Product Updated");
        } catch (error) {
            res.status(401).json({error:error.message}); 
        }
    }
}

export default ProductController;