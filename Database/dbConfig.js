import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log(error);
  }
}
export default connectDB;