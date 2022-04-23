const qualityEnvironment = require("express").Router();

const qualityEnvironmentController = require("../../controllers/quality_environment.controller");

qualityEnvironment
  .route("/")
  .post(qualityEnvironmentController.createCommercial)
  .get(qualityEnvironmentController.getCommercials);
qualityEnvironment
  .route("/:id")
  .get(qualityEnvironmentController.createCommercial)
  .put(qualityEnvironmentController.updateCommercial)
  .delete(qualityEnvironmentController.deleteCommercial);

module.exports = qualityEnvironment;
