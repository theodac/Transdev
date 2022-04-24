const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommercialSchema = new Schema({
  recetteGlobale: {
    type: Number,
  },
  nbNouveauxAbonnements: {
    type: Number
  },
  nbNouveauxPartenaires: {
    type: Number,
  },
  nbReclamations: {
    type: Number
  },
  dataDate: {
    type: Date
  }
});

module.exports = mongoose.model("Commercial", CommercialSchema);
