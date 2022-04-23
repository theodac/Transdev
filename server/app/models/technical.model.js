const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechnicalSchema = new Schema({
  pannesLignesAuxDixMillesKms: {
    type: Number
  },
  pannesLignesBusEtTeor: {
    type: Number
  },
  pannesLignesTram: {
    type: Number
  },
  kmsPerdus: {
    type: [{
        cause: String,
        valeur: Number
    }]
  },
  kmsPerdusBusEtTeor: {
    type: [{
        cause: String,
        valeur: Number
    }]
  },
  kmsPerdusTram: {
    type: [{
        cause: String,
        valeur: Number
    }]
  },
  consommationAuxCentsKmsGlobal: {
      type: Number
  },
  consommationAuxCentsKmsBusEtTeor: {
    type: Number
    },
  consommationAuxCentsKmsTram: {
    type: Number
  },
  etatDuParc: {
      type: String
  }
});

module.exports = mongoose.model("Technical", TechnicalSchema);
