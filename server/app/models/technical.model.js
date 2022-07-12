const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechnicalKmPerdu = new Schema({
    kmPerduMotif:{
        type:String
    },
    kmPerduMode:{
        type:String
    },
    kmPerduValeur:{
        type:Number
    }
})

const TechnicalSchema = new Schema({
    tauxPannesBusEtTeor: {
      type: Number
    },
    consommationBusEtTeorAuxCentsKms: {
      type: Number
    },
    consommationTramAuxCentsKms: {
      type: Number
    },
    tauxPannesTram: {
      type: Number
    },
    kmPerdu: [{
      type: TechnicalKmPerdu
    }],

    dataDate: {
        type: Date
    }


});


module.exports = mongoose.model("Technical", TechnicalSchema);
