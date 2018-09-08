import express from "express";
// import db from "../db/db";
import orderController from "../ordersControllers/orders";

const router = express.Router();

//get orders by id && get all orders
router.get("/api/v1/orders", orderController.getAllOrders);

router.get("/api/v1/orders/:id", orderController.getOrder);

//post specific order
router.post("/api/v1/orders", orderController.createOrder);

//update specific order
router.put("/api/v1/orders/:id", orderController.updateOrder);

//delete specific order
router.delete("/api/v1/orders/:id", orderController.deleteOrder);

export default router;