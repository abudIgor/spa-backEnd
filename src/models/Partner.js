const mongoose = require("mongoose");
const { Schema } = mongoose;

const partnerSchema =  new Schema({
    name: {
        type: String,
        required: true,
    },
    externalLink: {
        type: String,
        required: true,
    }
});

module.exports = Partner = mongoose.model('partner',partnerSchema);


