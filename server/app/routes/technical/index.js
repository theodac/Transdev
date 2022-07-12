const technical = require("express").Router();

const technicalController = require("../../controllers/technical.controller");

technical
  .route("/")
  .post(technicalController.createTechnical)
  .get(technicalController.getTechnicalEntries);
technical.route("/date/:date").get(technicalController.getTechnicalByDate);
technical
  .route("/:id")
  .get(technicalController.getTechnicalEntry)
  .put(technicalController.updateTechnical)
  .delete(technicalController.deleteTechnical);

module.exports = technical;
