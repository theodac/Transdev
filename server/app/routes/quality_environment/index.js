const qualityEnvironment = require("express").Router();

const qualityEnvironmentController = require("../../controllers/quality_environment.controller");

qualityEnvironment
  .route("/")
  .post(qualityEnvironmentController.createQualityEnvironment)
  .get(qualityEnvironmentController.getQualityEnvironmentEntries);
qualityEnvironment.route("/date/:date").get(qualityEnvironmentController.getQualityEnvironmentByDate);
qualityEnvironment
  .route("/:id")
  .get(qualityEnvironmentController.getQualityEnvironmentEntry)
  .put(qualityEnvironmentController.updateQualityEnvironment)
  .delete(qualityEnvironmentController.deleteQualityEnvironment);

module.exports = qualityEnvironment;
