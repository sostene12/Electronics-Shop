import Order from "../model/Order";

class OrderController{
    static async createOrder(req,res){
        try {
            const newOrder = new Order(req.body);
            const order = await newOrder.save();
            res.json({message:'order created successfully'},order)
        } catch (error) {
           res.status(400).json({error:error.message}) 
        }
    }

    static async updateOrder(req,res){
        try {
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        } catch (error) {
            res.status().json({error:error.message});
        }
    }

    static async deleteOrder(req,res){
        try {
            await Order.findByIdAndDelete({_id:req.params.id})
            res.status(200).json({message:"Order deleted!"});
        } catch (error) {
            res.status(401).json({error:error.message});  
        }   
    }

    static async getUserOrders(req,res){
        try {
            const order = await Order.findOne({_id:req.params.id});
            res.status(200).json(order)
        } catch (error) {
            res.status(401).json({error:error.message});
        }
    }

    static async getAllOrders(req,res){
        try {
            const orders = await Order.find();
            res.status(200).json(orders)
        } catch (error) {
            
        }
    }

    static async monthlyIncome(req,res){
        
    }
}

export default OrderController;