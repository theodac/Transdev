const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QualityEnvironmentSchema = new Schema({
  nbSignalementsQualiteEnvironement: {
    type: Number
  },
  impactCarbone: {
    type: Number
  },
  incidentsEnvironnementaux: {
    type: String
  },
  budgetEnvironnement: {
    type: Number
  },
  dataDate: {
    type: Date
  }
});

module.exports = mongoose.model("QualityEnvironment", QualityEnvironmentSchema);
