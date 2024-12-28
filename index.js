import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import resetRouter from "./Routes/resetRouter.js";
import serviceRouter from "./Routes/serviceRouter.js";
import bookrouter from "./Routes/bookingRouter.js";
import postRouter from "./Routes/postRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();


try {
    app.get("/",(req,res)=>{
        res.status(200).send("Welcome to backend")
        })
    } catch (error) {
        res.status(500).send("Internal server error")
    }

app.use("/api/auth",resetRouter)
app.use("/api/service",serviceRouter)
app.use("/api/booking",bookrouter)
app.use("/api/posts",postRouter);

try {
    const port=process.env.PORT || 8000
    app.listen(port,()=>{
       console.log(`Server started successfully and running on port ${port}`);
       
    })
} catch (error) {
    res.status(500).send("Internal server error")
}