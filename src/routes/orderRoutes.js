const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrder,
  deleteOrder
} = require('../controllers/orderController');

/**
 * @route   POST /order
 * @desc    Criar um novo pedido
 * @access  Public
 */
router.post('/', createOrder);

/**
 * @route   GET /order/list
 * @desc    Listar todos os pedidos
 * @access  Public
 * @note    Esta rota deve vir ANTES de /order/:orderId para evitar conflito
 */
router.get('/list', getAllOrders);

/**
 * @route   GET /order/:orderId
 * @desc    Obter um pedido específico por ID
 * @access  Public
 */
router.get('/:orderId', getOrderById);

/**
 * @route   PUT /order/:orderId
 * @desc    Atualizar um pedido existente
 * @access  Public
 */
router.put('/:orderId', updateOrder);

/**
 * @route   DELETE /order/:orderId
 * @desc    Deletar um pedido
 * @access  Public
 */
router.delete('/:orderId', deleteOrder);

module.exports = router;
