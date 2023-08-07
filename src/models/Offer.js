const mongoose = require('mongoose');
const { Schema } = mongoose;

const OfferSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Float32Array,
    require: true
  },
  addons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Addons',
  }]
});

const Offer = mongoose.model('offer', OfferSchema);

module.exports = Offer;
