const buying = require("express").Router();

const buyingController = require("../../controllers/buying.controller");

buying
  .route("/")
  .post(buyingController.createBuying)
  .get(buyingController.getBuyings);
buying
  .route("/:id")
  .get(buyingController.getBuying)
  .put(buyingController.updateCommercial)
  .delete(buyingController.deleteBuying);

module.exports = buying;
