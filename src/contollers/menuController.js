import { Produtos } from "../models/index.js";
import { getMenuCache, setMenuCache } from "../cache/menuCache.js";

export const getMenu = async (req, res) => {
    try {
        const cachedMenu = getMenuCache();
        if (cachedMenu) return res.json(cachedMenu);

        const produtos = await Produtos.findAll({
            where: { ativo: true },
            attributes: ["nome", "preco", "imagem"],
            order: [["nome", "ASC"]]
        });

        const menu = {
            copos: await Produtos.findAll({where: { ativo: true, tipo: "COPO" }, attributes: ["nome", "preco", "imagem"]}),
            frutas: await Produtos.findAll({ where: { ativo: true, tipo: "FRUTA" }, attributes: ["nome"]}),
            coberturas: await Produtos.findAll({ where: { ativo: true, tipo: "COBERTURA" }, attributes: ["nome"]})
        }
        
        setMenuCache({ menu });

        res.json({menu: menu});
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro ao buscar menu" });
    }
};
