import { Order, OrderItem, Produtos } from "../models/index.js";
import { validateOrder } from "../validations/orderValidator.js"

class OrderService {
    static async createOrder({ items, paymentMethod, nomeCliente, numeroCliente, observacao }) {
        if (!items || items.length === 0) throw new Error("Pedido precisa ter ao menos um produto");

        const error = validateOrder({ items });

        if (error) {
            throw new Error(error);
        }

        let total = 0;

        const order = await Order.create({
            paymentMethod,
            total: 0,
            nomeCliente,
            numeroCliente, 
            observacao
        });

        for (const item of items) {
            const produto = await Produtos.findOne({
                where: { id: item.produtoId, ativo: true }
            });

            if (!produto) throw new Error("Produto inválido ou inativo");

            if (item.quantidade < 1) throw new Error("Quantidade inválida");

            const subtotal = produto.preco * item.quantidade;
            total += subtotal;

            await OrderItem.create({
                orderId: order.id,
                nomeProduto: produto.nome,
                precoUnitario: produto.preco,
                quantidade: item.quantidade,
                subtotal
            });
        }

        await order.update({ total });

        return order;
    }

    static async putStatus({ id, status}) {
        if (!status) {
            throw new Error("Status é obrigatório");
        }

        const validStatus = [
            "PENDING",
            "PREPARING",
            "READY",
            "DELIVERED",
            "CANCELLED"
        ];

        status = status.toUpperCase();
        if (!validStatus.includes(status)) throw new Error("Status inválido");

        const order = await Order.findByPk(id);

        if (!order) throw new Error("Pedido não encontrado");

        await order.update({ status });

        return order;
    }

}

export default OrderService;