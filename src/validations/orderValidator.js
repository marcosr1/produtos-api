export const validateOrder = (data) => {
    const { items } = data;

    if (!items || Array.isArray(items)) return "Pedido precisa ter itens";
    
    if (items.length === 0) return "Pedido não pode estar vazio";

    for (const item of items) {
        if (!item.nomeProduto) return "Produto inválido";

        if (!item.quantidade || item.quantidade <= 0) return "Quantidade inválida"
    }

    return null;
}