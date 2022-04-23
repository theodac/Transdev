const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommercialSchema = new Schema({
  recetteGlobale: {
    type: Number,
  },
  nbVentes: {
    type: [
      {
        label: String,
        value: Number,
      },
    ],
  },
  nbKilometres: {
    type: [
      {
        label: String,
        value: Number,
      },
    ],
  },
  recetteCommercial: {
    type: [
      {
        label: String,
        value: Number,
      },
    ],
  },
  nbReclamations: {
    type: [
      {
        label: String,
        value: Number,
      },
    ],
  },
  dataDate: {
    type: Date
  }
});

module.exports = mongoose.model("Commercial", CommercialSchema);
