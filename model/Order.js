import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products:[],
    amount:{type:Number,required:true},
    status:{type:String,default:'pending'}
},{timestamps:true});

const Order = mongoose.model('Order',orderSchema);

export default Order;