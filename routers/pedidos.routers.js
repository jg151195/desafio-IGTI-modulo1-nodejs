import express from "express";
import OrderController from "../controller/pedidos.controller.js";


const router = express.Router();

router.post("/createOrder",OrderController.createOrder);
router.post("/updateOrder",OrderController.updateOrder);
router.post("/deliveryStatus", OrderController.deliveryStatus);
router.delete("/deleteOrder", OrderController.deleteOrder);
router.get("/getOrder", OrderController.getOrder);
router.get("/clientAllTimePayment", OrderController.clientAllTimePayment);
router.get("/productAllTimePayment", OrderController.productAllTimePayment);
router.get("/bestSellers", OrderController.bestSellers);

export default router;

