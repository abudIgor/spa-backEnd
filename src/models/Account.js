const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema({
  cpf: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lead: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lead',
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
});

const Account = mongoose.model('account', AccountSchema);

module.exports = Account;
