import OrderService from "../service/orderService.js";
import { validateOrder } from "../validations/orderValidator.js";

export const createOrder = async (req, res) => {
    const err = validateOrder(req.body);

    if (err) return res.status(400).json({ err });

    try {
        const order = await OrderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};