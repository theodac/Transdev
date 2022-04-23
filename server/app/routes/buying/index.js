const buying = require("express").Router();

const buyingController = require("../../controllers/buying.controller");

buying
  .route("/")
  .post(buyingController.createCommercial)
  .get(buyingController.getCommercials);
buying
  .route("/:id")
  .get(buyingController.createCommercial)
  .put(buyingController.updateCommercial)
  .delete(buyingController.deleteCommercial);

module.exports = buying;
