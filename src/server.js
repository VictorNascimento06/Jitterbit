const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const orderRoutes = require('./routes/orderRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de teste/health check
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API de Gerenciamento de Pedidos',
    version: '1.0.0',
    endpoints: {
      'POST /order': 'Criar novo pedido',
      'GET /order/:orderId': 'Obter pedido por ID',
      'GET /order/list': 'Listar todos os pedidos',
      'PUT /order/:orderId': 'Atualizar pedido',
      'DELETE /order/:orderId': 'Deletar pedido'
    }
  });
});

app.use('/order', orderRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// bora rodar essa bagaça
app.listen(PORT, () => {
  console.log('Servidor rodando na porta', PORT);
});

process.on('unhandledRejection', (err) => {
  console.log('deu ruim:', err.message);
});

module.exports = app;
