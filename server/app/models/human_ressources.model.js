const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HumanRessourcesSchema = new Schema({
  tauxAbsenteisme: {
    type: [{
        raison: String,
        taux: Number
    }]
  },
  tauxFormation: {
    type: [{
        type: String,
        valeur: Number
    }]
  },
    dataDate: {
        type: Date
    }
});

module.exports = mongoose.model("HumanRessources", HumanRessourcesSchema);
