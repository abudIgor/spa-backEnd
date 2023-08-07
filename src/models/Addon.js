const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddonSchema = new Schema({
  addonName: {
    type: String,
    required: true,
  },
  price: {
    type: Float32Array,
    require: true
  }
});

const Addon = mongoose.model('addon', AddonSchema);

module.exports = Addon;
