import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
});

const Order = mongoose.model('Product',orderSchema);

export default Order;