import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products:[{
        productid:{},
        quantity:{String,required:true}
    }],
    price:{type:Number,required:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const Order = mongoose.model('Product',orderSchema);

export default Order;