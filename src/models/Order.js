const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: [true, 'O productId é obrigatório']
  },
  quantity: {
    type: Number,
    required: [true, 'A quantidade é obrigatória'],
    min: [1, 'A quantidade deve ser no mínimo 1']
  },
  price: {
    type: Number,
    required: [true, 'O preço é obrigatório'],
    min: [0, 'O preço não pode ser negativo']
  }
}, { _id: false });

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: [true, 'O orderId é obrigatório'],
    unique: true,
    trim: true
  },
  value: {
    type: Number,
    required: [true, 'O valor total é obrigatório'],
    min: [0, 'O valor não pode ser negativo']
  },
  creationDate: {
    type: Date,
    required: [true, 'A data de criação é obrigatória'],
    default: Date.now
  },
  items: {
    type: [itemSchema],
    validate: {
      validator: function(items) {
        return items && items.length > 0;
      },
      message: 'O pedido deve conter pelo menos um item'
    }
  }
}, {
  timestamps: true
});

// faz buscar mais rapido
orderSchema.index({ orderId: 1 });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
