const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HumanRessourcesSchema = new Schema({
  tauxAbsenteisme: {
    type: Number
  },
  tauxGreve: {
    type: Number
  },
  tauxRecrutement: {
    type: Number
  },
  tauxTurnOver: {
    type: Number
  },
    dataDate: {
        type: Date
    }
});

module.exports = mongoose.model("HumanRessources", HumanRessourcesSchema);
