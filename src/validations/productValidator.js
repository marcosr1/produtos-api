export const validateProduto = (data) => {
    const { nome, preco, tipo } = data;

    if (!nome || nome.trim() === "") return "Nome do produto é obrigatório";

    if (!preco || isNaN(preco) || preco <= 0) return "Preço deve ser um número maior que 0";
    
    if (!tipo) return "Tipo do produto é obrigatório";

    return null;
}