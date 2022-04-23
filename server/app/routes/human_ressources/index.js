const humanRessources = require("express").Router();

const humanRessourcesController = require("../../controllers/human_ressources.controller");

humanRessources
  .route("/")
  .post(humanRessourcesController.createCommercial)
  .get(humanRessourcesController.getCommercials);
humanRessources
  .route("/:id")
  .get(humanRessourcesController.createCommercial)
  .put(humanRessourcesController.updateCommercial)
  .delete(humanRessourcesController.deleteCommercial);

module.exports = humanRessources;
