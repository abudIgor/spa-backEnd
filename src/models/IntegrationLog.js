const mongoose = require("mongoose");
const { Schema } = mongoose;

const integrationLogSchema =  new Schema({
    request: {
        type: String,
        required: true,
    },
    response: {
        type: String,
        required: true,
    },
    executionDate: {
        type: Date,
        required: true,
    }
});

module.exports = IntegrationLog = mongoose.model('integrationLog',integrationLogSchema);


