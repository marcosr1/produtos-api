import OrderService from "../service/orderService.js";

export const createOrder = async (req, res) => {
    try {
        const order = await OrderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};