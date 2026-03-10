# 📦 Produtos API

API REST para gerenciamento de produtos.  
Projeto desenvolvido em **Node.js**, usando **PostgreSQL**, **Sequelize**.

---

## 🚀 Funcionalidades

- ✅ Criar produtos
- ✅ Listar produtos
- ✅ Atualizar campos individualmente (PATCH)
- ✅ Ativar / desativar produto
- ✅ Upload de múltiplas imagens
- ✅ URLs das imagens salvas no banco de dados
- ✅ Estrutura organizada e escalável

---

## 🧱 Tecnologias

- Node.js
- Express
- PostgreSQL
- Sequelize
- dotenv
- UUID

---

## 📁 Estrutura do projeto
```
src/
├── app.js
├── server.js
├── cache/
│ ├── menuCache.js
├── config/
│ ├── database.js
├── controllers/
│ └── authController.js
│ └── menuController.js
│ └── productController.js
│ └── orderController.js
├── middlewares/
│ └── authMiddleware.js
├── models/
│ └── Index.js
│ └── Product.js
│ └── Order.js
│ └── OrderItem.js
└── routes/
│ └── authRoutes.js
│ └── menuRoutes.js
│ └── productRoutes.js
│ └── orderRoutes.js
└── service/
│ └── productService.js
│ └── orderService.js
```

## ⚙️ Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto:
```
PORT=3000

DB_NAME=produtosdb
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
```

## ▶️ Executando o projeto

```bash
npm run dev
```

## 🔗 Endpoints

### Menu
```bash
GET /menu
```

### Criar produto
```bash
POST /produtos/
```
### preview pedido
```bash
POST /produtos/previewPedido
```
### Listar Produtos
```bash
GET /produtos/
```
### Atualizar nome
```bash
PATCH /produtos/:id/name
```
### Atualizar preço
```bash
PATCH /produtos/:id/price
```
### Atualizar ativo
```bash
PATCH /produtos/:id/active
```
### Atualizar tipo
```bash
PATCH /produtos/:id/tipo
```
### Atualizar imagem
```bash
PATCH /produtos/:id/imagem
```


### Criar order
```bash
POST /order/
```

### Login Admin
```bash
POST /login
```

---
