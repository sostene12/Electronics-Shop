import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dburl = process.env.MONGODB_URL;
const connectDb = async () =>{
    await mongoose.connect(dburl,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log("Database connected successfully!"))
    .catch((error) => console.log({error:error.message}));
}

export default connectDb;