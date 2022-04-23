const technical = require("express").Router();

const technicalController = require("../../controllers/technical.controller");

technical
  .route("/")
  .post(technicalController.createCommercial)
  .get(technicalController.getCommercials);
technical
  .route("/:id")
  .get(technicalController.createCommercial)
  .put(technicalController.updateCommercial)
  .delete(technicalController.deleteCommercial);

module.exports = technical;
