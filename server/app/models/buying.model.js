const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuyingSchema = new Schema({
  nbCommandesPassees: {
    type: [{
        secteur: String,
        valeur: Number
      }]
  },
  nbCreationNouveauxFournisseurs: {
    type: [{
        secteur: String,
        valeur: Number
      }]
  },
  tauxAchatsFournisseursLocauxMetropole: {
    type: Number
  },
  tauxAchatsFournisseursLocauxNormandie: {
    type: Number
  },
  tauxAchatsFournisseursLocauxAutre: {
    type: Number
  },
  tauxFournisseursCertifISO: {
    type: Number
  }
});

module.exports = mongoose.model("Buying", BuyingSchema);
