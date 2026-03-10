import { Produtos } from "../models/index.js";
import { getMenuCache, setMenuCache } from "../cache/menuCache.js";

export const getMenu = async (req, res) => {
    try {
        const cachedMenu = getMenuCache();
        if (cachedMenu) return res.json(cachedMenu);

        const produtos = await Produtos.findAll({
            where: { ativo: true },
            attributes: ["nome", "preco", "imagem", "tipo"],
            order: [["nome", "ASC"]]
        });

        const menu = {};

        produtos.forEach( produto => {
            const tipo = produto.tipo.toLowerCase();

            if (!menu[tipo]) menu[tipo] = [];

            menu[tipo].push(produto);
        });
        
        setMenuCache({ menu });

        res.json({menu: menu});
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro ao buscar menu" });
    }
};
