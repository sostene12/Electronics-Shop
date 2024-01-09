import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dburl = process.env.NODE_ENV === 'test' ? process.env.MONGODB_URL_TEST : process.env.MONGODB_URL;
// const dburl = process.env.MONGODB_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`${process.env.NODE_ENV === 'test' ? 'Testing Database connected successfully!' : 'Database connected successfully!' }`);
    // console.log('Database connected successfully!');
  } catch (error) {
    console.error({ error: error.message });
  }
};

const disconnectDb = async () => {
  try {
    await mongoose.disconnect();
    console.log('Database disconnected successfully!');
  } catch (error) {
    console.error({ error: error.message });
  }
};

export { connectDb, disconnectDb };
