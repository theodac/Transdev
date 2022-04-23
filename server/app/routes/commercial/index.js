const commercial = require("express").Router();

const commercialController = require("../../controllers/commercial.controller");

commercial
  .route("/")
  .post(commercialController.createCommercial)
  .get(commercialController.getCommercials);
commercial
  .route("/:id")
  .get(commercialController.getCommercial)
  .put(commercialController.updateCommercial)
  .delete(commercialController.deleteCommercial);

module.exports = commercial;
