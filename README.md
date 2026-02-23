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
├── config/
│ ├── database.js
├── controllers/
│ └── productController.js
│ └── orderController.js
├── models/
│ └── Index.js
│ └── Product.js
│ └── Order.js
│ └── OrderItem.js
└── routes/
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
POST /products/
```
```json
{
    "id": "uuid",
    "imagem": [],
    "nome": "string",
    "preco": float,
    "tipo": "TIPO",
    "ativo": true,
    "updatedAt": "",
    "createdAt": ""
}
```
### preview pedido
```bash
POST /produtos/previewPedido
```
### Listar Produtos
```bash
GET /products/
```
### Atualizar nome
```bash
PATCH /products/:id/name
```
### Atualizar preço
```bash
PATCH /products/:id/price
```
### Atualizar ativo
```bash
PATCH /products/:id/active
```

### Criar order
```bash
POST /order/
```

### fazer login 
```bash
POST /login
```
```json
{
  "user": admin,
  "password": admin
}
```

---
