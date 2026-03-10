import Order from "../models/Order.js";
import OrderService from "../service/orderService.js";
import { validateOrder } from "../validations/orderValidator.js";

export const createOrder = async (req, res) => {
    try {
        const order = await OrderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getOrder = async (req, res) => {
    try {
        const order = Order.findAll();
        res.json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}   

export const getOrderID = async(req, res) => {
    try {
        const { id } = req.params;
        const orderId = Order.findByPk(id);
        res.json(orderId);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const updateStatus = async (req, res) => {
    try { 
        const { id } = req.params;
        const { status } = req.body;

        const order = await OrderService.putStatus(id, status);

        res.json({message: "Status atualizado", order});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}