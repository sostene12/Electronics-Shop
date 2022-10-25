import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products:[{
        productid:{ type:String },
        quantity:{type:Number,default:1}
    }],
    amount:{type:Number,required:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    status:{type:String,default:'pending'}
},{timestamps:true});

const Order = mongoose.model('Product',orderSchema);

export default Order;