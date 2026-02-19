import { Produtos } from "../models/index.js";

class ProdutosService {
    static async verificarProduto(produtoId) {
        const produto = await Produtos.findOne({
            where: { id: produtoId, ativo: true }
        });

        if (!produtoId) throw new Error("Produto Inválido ou Inativo");

        return produto;
    }

    static calcularPreco({ precoBase, quantidade }) {
        if (!quantidade || quantidade < 1) {
            throw new Error("Quantidade inválida");
        }

        return Number(precoBase) * quantidade;
    }

    static async calcularPedido({ produtoId, quantidade }) {
        const produto = await this.verificarProduto(produtoId);

        const total = this.calcularPreco({
            precoBase: produto.preco,
            quantidade
        });

        return {
            produtoId: produto.id,
            nome: produto.nome,
            precoUnitario: produto.preco,
            quantidade,
            total
        };
    }
}

export default ProdutosService;