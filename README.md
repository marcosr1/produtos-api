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

API_USER=admin
API_PASS=admin
JWT_SECRET=suachavesecreta
JWT_EXPIRES=1h
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

envio:
```json
{
    "nome": "string",
    "preco": "float",
    "tipo": "TIPO",
    "ativo": "boolean"
}
```

resposta:
```json
{
    "id": "id",
    "imagem": [],
    "nome": "string",
    "preco": "float",
    "tipo": "TIPO",
    "ativo": "boolean",
    "updatedAt": "",
    "createdAt": ""
}
```

### preview pedido
```bash
POST /produtos/previewPedido
```

envio:
```json
{
    "produtoId": "id",
    "quantidade": 2
}
```

resposta:
```json
{
    "produtoId": "id",
    "nome": "string",
    "precoUnitario": "float",
    "quantidade": "integer",
    "total": "float"
}
```

### Listar Produtos
```bash
GET /produtos/
```
resposta:
```json
[
    {
        "id": "id",
        "nome": "string",
        "preco": "float",
        "tipo": "TIPO",
        "imagem": [],
        "ativo": "boolean",
        "createdAt": "data",
        "updatedAt": "data"
    }
]
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

---
