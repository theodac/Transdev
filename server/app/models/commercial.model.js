const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommercialRecette = new Schema({
    recetteCategorie: {
        type:String
    },
    recetteSommeValeurHT:{
        type:Number
    }
})

const CommercialReclamation = new Schema({
    nbReclamations:{
        type:Number
    },
    reclamationMotif:{
        type:String
    },

})

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
  recette:[{
    type: CommercialRecette
  }],
  reclamation: [{
    type:CommercialReclamation
  }],
  dataDate: {
    type: Date
  }
});

module.exports = mongoose.model("Commercial", CommercialSchema);