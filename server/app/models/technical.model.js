const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechnicalSchema = new Schema({
    tauxPannesBusEtTeor: {
      type: Number
    },
    consommationBusEtTeorAuxCentsKms: {
      type: Number
    },
    consommationTramAuxCentsKms: {
      type: Number
    },
    tauxPannesTram: {
      type: Number
    },
    dataDate: {
        type: Date
    }
});

module.exports = mongoose.model("Technical", TechnicalSchema);
