const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Commercialv2Recette = new Schema({
    recetteCategorie: {
        type:String
    },
    recetteSommeValeurHT:{
        type:Number
    }
})

const Commercialv2Reclamation = new Schema({
    nombreReclamations:{
        type:Number
    },
    reclamationMotif:{
        type:String
    },

})

const Commercialv2Schema = new Schema({
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
    type: Commercialv2Recette
  }],
  reclamation: [{
    type:Commercialv2Reclamation
  }],
  dataDate: {
    type: Date
  }
});

module.exports = mongoose.model("Commercialv2", Commercialv2Schema);