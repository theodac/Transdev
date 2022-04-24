const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuyingSchema = new Schema({
  nbTicketsVendus: {
    type: Number
  },
  nbTotal: {
    type: Number
  },
  nbTicketsSMS: {
    type: Number
  },
  ventePopulaire: {
    type: String
  },
  dataDate: {
    type: Date
  }
});

module.exports = mongoose.model("Buying", BuyingSchema);
