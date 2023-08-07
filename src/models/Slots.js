const mongoose = require("mongoose");
const { Schema } = mongoose;

const SlotsSchema =  new Schema({
    date: {
        type: Date,
        required: true,
    },
    isExpired: {
        type: Boolean,
        required: true,
    },
    isReserved: {
        type: Boolean,
        required: true,
    }
});

module.exports = Slots = mongoose.model('slots',SlotsSchema);


