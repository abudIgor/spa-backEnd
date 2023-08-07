const mongoose = require("mongoose");
const { Schema } = mongoose;

const leadSchema =  new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isConverted: {
        type: Boolean,
        require: true,
    }
});

module.exports = Lead = mongoose.model('leads',leadSchema);


