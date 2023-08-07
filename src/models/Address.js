const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddressSchema =  new Schema({
    street: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    UF: {
        type: String,
        required: true,
    }
});

module.exports = Address = mongoose.model('address',AddressSchema);


