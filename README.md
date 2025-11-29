# API de Pedidos

Sistema pra gerenciar pedidos com Node.js e MongoDB

## O que usei

- Node.js
- Express
- MongoDB
- Mongoose

## Como rodar

1. Clona o repo
```bash
git clone <url-do-repositorio>
```

2. Instala as paradas
```bash
npm install
```

3. Cria um arquivo `.env` e coloca isso:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/order_management
```

4. Certifica que o MongoDB ta rodando

5. Roda o bagulho
```bash
npm start
```

Pronto, vai estar rodando em `http://localhost:3000`

## Como usar

### Criar pedido
```bash
POST http://localhost:3000/order
```

Manda isso no body:
```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

### Pegar um pedido
```bash
GET http://localhost:3000/order/v10089015vdb-01
```

### Listar tudo
```bash
GET http://localhost:3000/order/list
```

### Atualizar pedido
```bash
PUT http://localhost:3000/order/v10089015vdb-01
```

### Deletar pedido
```bash
DELETE http://localhost:3000/order/v10089015vdb-01
```

## Estrutura

```
src/
├── config/        - config do mongo
├── controllers/   - logica dos endpoints
├── middleware/    - tratamento de erro
├── models/        - schema do banco
├── routes/        - rotas da api
└── server.js      - arquivo principal
```

isso aí 🚀
