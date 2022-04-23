const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QualityEnvironmentSchema = new Schema({
  nbSituationsInacceptables: {
    type: Number
  },
  nbSituationsInacceptablesAvecEvo: {
    type: Number
  },
  communicationsCritereProprete: {
    type: String
  },
  nbSignalementsNonRespectesPqe: {
    type: Number
  }
});

module.exports = mongoose.model("QualityEnvironment", QualityEnvironmentSchema);
