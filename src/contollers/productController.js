import { Produtos } from "../models/index.js";
import produtosService from "../service/productService.js";

export const createProduct = async (req, res) => {
    try {
        const produto = await Produtos.create(req.body);
        res.status(201).json(produto)
    } catch (error) {
        res.status(400).json( { erro: error.message } );
    }
};

export const getProducts = async (req, res) => {
    const produtos = await Produtos.findAll();
    res.status(201).json(produtos)
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    await Produtos.update(req.body, { where: { id } } );

    const produto = await Produtos.findByPk(id);
    res.json(produto);
};

export const updateName = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    if (!nome) return res.status(400).json( { error: "Nome é obrigatorio" } );

    await Produtos.update( { nome }, { where: { id } } );

    const produto = await Produtos.findByPk(id);
    res.json(produto)
};

export const updatePreco = async (req, res) => {
    const { id } = req. params;
    const { preco } = req.body;

    if (!preco) return res.status(400).json( { error: "Preço é obrigatorio" } );

    await Produtos.update( { preco }, { where: { id } } );

    const produto = await Produtos.findByPk(id);
    res.json(produto);
};

export const updateImage = async (req, res) => {
    const { id } = req.params;
    const { imagem } = req.body;

    if (!imagem) return res.status(400).json( { error: "Imagem é obrigatoria" } );

    await Produtos.update( { imagem }, { where: { id } } );

    const produto = await Produtos.findByPk(id);
    res.json(produto);
};

export const updateAtivo = async (req, res) => {
    const { id } = req.params;
    const { ativo } = req.body;

    if (!ativo) return res.status(400).json( { error: "Ativo é obrigatório" } );

    await Produtos.update( { ativo }, { where: { id } } );

    const produto = await Produtos.findByPk(id);
    res.json(produto);
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    await Produtos.destroy( { where: { id } } );
    res.json( { message: "Produto removido com sucesso!" } );
};

export const previewPedido = async (req, res) => {
    try {
    const resultado = await produtosService.calcularPedido(req.body);

    res.json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};