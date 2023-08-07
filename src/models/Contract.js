const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContractSchema = new Schema({
  creationDate: {
    type: Date,
    required: true,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  }
});

const Contract = mongoose.model('contract', ContractSchema);

module.exports = Contract;
