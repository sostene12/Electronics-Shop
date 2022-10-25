import Cart from "../model/cart";

class CartController{
    static async createCart(req,res){
        try {
            const newCart = new Cart(req.body);
            const savedCart = await newCart.save();
            res.status(200).json(savedCart); 
        } catch (error) {
            res.status(401).json({error:error.message})
        }
    }

    static async updateCart(req,res){
        try {
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            res.status(200).json(updatedCart); 
        } catch (error) {
            res.status(401).json({error:error.message})
        }
    }

    static async deleteCart(req,res){
        try {
            await Cart.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Cart deleted"}); 
        } catch (error) {
            res.status(401).json({error:error.message})
        }
    }

    static async getSingleCart(req,res){
        try {
            const order = await Cart.findOne(req.params.id)
            res.status(200).json(order); 
        } catch (error) {
            res.status(401).json({error:error.message})
        }
    }

    static async getAllOrders(req,res){
        try {
            const orders = await Cart.find()
            res.status(200).json(orders); 
        } catch (error) {
            res.status(401).json({error:error.message})
        }
    }
}

export default CartController;