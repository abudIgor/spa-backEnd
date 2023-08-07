const mongoose = require("mongoose");
const { Schema } = mongoose;

const creditAnalysisSchema =  new Schema({
    isApproved: {
        type: Boolean,
        required: true,
    },
    creationDate: {
        type: Date,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    override: {
        type: Boolean,
        required: true,
    }
});

module.exports = CreditAnalysis = mongoose.model('creditAnalysis',creditAnalysisSchema);


