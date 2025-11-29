const Order = require('../models/Order');

const mapRequestToDatabase = (requestData) => {
  const orderData = {
    orderId: requestData.numeroPedido,
    value: requestData.valorTotal,
    creationDate: requestData.dataCriacao,
    items: []
  };
  
  for (let i = 0; i < requestData.items.length; i++) {
    const item = requestData.items[i];
    orderData.items.push({
      productId: parseInt(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    });
  }
  
  return orderData;
};

const mapDatabaseToResponse = (dbData) => {
  const response = {
    orderId: dbData.orderId,
    value: dbData.value,
    creationDate: dbData.creationDate,
    items: dbData.items
  };
  return response;
};

// cria pedido novo
const createOrder = async (req, res) => {
  try {
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;
    
    if (!numeroPedido || !valorTotal || !dataCriacao || !items) {
      return res.status(400).json({
        success: false,
        message: 'Todos os campos são obrigatórios: numeroPedido, valorTotal, dataCriacao, items'
      });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'O pedido deve conter pelo menos um item'
      });
    }

    const existingOrder = await Order.findOne({ orderId: numeroPedido });
    if (existingOrder) {
      return res.status(409).json({
        success: false,
        message: `Pedido com número ${numeroPedido} já existe`
      });
    }

    const orderData = mapRequestToDatabase(req.body);
    const order = await Order.create(orderData);

    res.status(201).json({
      success: true,
      message: 'Pedido criado com sucesso',
      data: mapDatabaseToResponse(order)
    });

  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Erro de validação',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao criar pedido',
      error: error.message
    });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({ orderId });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: `Pedido ${orderId} não encontrado`
      });
    }

    res.status(200).json({
      success: true,
      data: mapDatabaseToResponse(order)
    });

  } catch (error) {
    console.error('Erro ao buscar pedido:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao buscar pedido',
      error: error.message
    });
  }
};

// lista tudo
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ creationDate: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders.map(order => mapDatabaseToResponse(order))
    });

  } catch (error) {
    console.error('Erro ao listar pedidos:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao listar pedidos',
      error: error.message
    });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

    const existingOrder = await Order.findOne({ orderId });
    if (!existingOrder) {
      return res.status(404).json({
        success: false,
        message: `Pedido ${orderId} não encontrado`
      });
    }

    const orderData = mapRequestToDatabase(req.body);

    if (numeroPedido && numeroPedido !== orderId) {
      const duplicateOrder = await Order.findOne({ orderId: numeroPedido });
      if (duplicateOrder) {
        return res.status(409).json({
          success: false,
          message: `Pedido com número ${numeroPedido} já existe`
        });
      }
    }

    const updatedOrder = await Order.findOneAndUpdate(
      { orderId },
      orderData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Pedido atualizado com sucesso',
      data: mapDatabaseToResponse(updatedOrder)
    });

  } catch (error) {
    console.error('Erro ao atualizar pedido:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Erro de validação',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao atualizar pedido',
      error: error.message
    });
  }
};

// apaga pedido
const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOneAndDelete({ orderId });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: `Pedido ${orderId} não encontrado`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Pedido deletado com sucesso',
      data: mapDatabaseToResponse(order)
    });

  } catch (error) {
    console.error('Erro ao deletar pedido:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao deletar pedido',
      error: error.message
    });
  }
};

module.exports = {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrder,
  deleteOrder
};
