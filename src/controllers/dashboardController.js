import { Op } from "sequelize";
import { Order } from "../models/index.js";

export const getDashboard = async (req, res) => {
    try {
        const inicioHoje = new Date();
        inicioHoje.setHours(0,0,0,0);
        
        const fimHoje = new Date();
        fimHoje.setHours(23,59,59,999);

        const pedidosHoje = await Order.count({
            where: {
                createdAt: {
                    [Op.between]: [inicioHoje, fimHoje]
                }
            }
        });

        const faturamentoHoje = await Order.sum("total", {
            where: {
                createdAt: {
                    [Op.between]: [inicioHoje, fimHoje]
                },
                status: "DELIVERED"
            }
        });

        const pendentes = await Order.count({ where: { status: "PENDING" } });
        const preparando = await Order.count({ where: { status: "PREPARING" } });
        const prontos = await Order.count({ where: { status: "READY" } });
        const entregues = await Order.count({ wher: { status: "DELIVERED" } });

        res.json({pedidosHoje, faturamentoHoje: faturamentoHoje || 0, pendentes, preparando, prontos, entregues})
    } catch ( error ) {
        res.status(500).json({ error: error.message });
    }
};