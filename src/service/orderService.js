import { Order, OrderItem, Produtos } from "../models/index.js";

class OrderService {
    static async createOrder({ items, paymentMethod }) {
        if (!items || items.length === 0) throw new Error("Pedido precisa ter ao menos um produto");

        let total = 0;

        const order = await Order.create({
            paymentMethod,
            total: 0
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
}

export default OrderService;