import express from "express";
import { adminMiddleware } from "../Middleware/authMiddleware.js";
import { createService, deleteService, getService, updateService } from "../Controllers/serviceController.js";


const router = express.Router();

router.post("/create",adminMiddleware,createService )
router.get("/get",getService)
router.put("/update/:id",adminMiddleware, updateService)
router.delete("/delete/:id", adminMiddleware,deleteService)

export default router;