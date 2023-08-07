const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  },
  slot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slot',
  },
  offer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer',
  },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
