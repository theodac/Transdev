const humanRessources = require("express").Router();

const humanRessourcesController = require("../../controllers/human_ressources.controller");

humanRessources
  .route("/")
  .post(humanRessourcesController.createHumanRessources)
  .get(humanRessourcesController.getHumanRessourcesEntries);
humanRessources
  .route("/:id")
  .get(humanRessourcesController.getHumanRessourcesEntry)
  .put(humanRessourcesController.updateHumanRessources)
  .delete(humanRessourcesController.deleteHumanRessources);

module.exports = humanRessources;
