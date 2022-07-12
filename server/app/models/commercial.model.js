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

const CommercialNbReclamation = new Schema({
    nbReclamationNumeroDossier:{
        type:Number
    },
    nbReclamationCode4:{
        type:String
    },
    nbReclamationCodeSynthese2:{
        type:String
    },
    nbReclamationEchantillon:{
        type:String
    },
    nbReclamationDoublon:{
        type:Number
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
  nbReclamations: {
    type: Number
  },
  recette:[{
    type: CommercialRecette
  }],
  nbReclamation: [{
    type:CommercialNbReclamation
  }],
  dataDate: {
    type: Date
  }
});

module.exports = mongoose.model("Commercial", CommercialSchema);
