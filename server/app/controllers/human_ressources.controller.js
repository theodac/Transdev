const HumanRessources = require("../models/human_ressources.model");

module.exports = {
  async createHumanRessources(req, res) {
    const {
      tauxAbsenteisme, 
      tauxFormation, 
      dataDate
    } = req.body;

    const newHumanRessources = new HumanRessources({
      tauxAbsenteisme, 
      tauxFormation, 
      dataDate
    });
    await newHumanRessources.save();

    res.status(201).json({
      success: true,
      data: newHumanRessources,
    });
  },
  async getHumanRessourcesEntries(req, res) {
    const humanRessources = await HumanRessources.find();

    res.status(200).json({
      success: true,
      data: humanRessources,
    });
  },
  async getHumanRessourcesEntry(req, res) {
    const { id } = req.params;

    const humanRessources = await HumanRessources.findById(id);

    if (!humanRessources) {
      return res.status(404).json({
        success: false,
        error: "HumanRessources entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: humanRessources,
    });
  },
  async updateHumanRessources(req, res) {
    const { id } = req.params;

    const humanRessources = await HumanRessources.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!humanRessources) {
      return res.status(404).json({
        success: false,
        error: "HumanRessources entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: humanRessources,
    });
  },
  async deleteHumanRessources(req, res) {
    const { id } = req.params;

    const humanRessources = await HumanRessources.findByIdAndDelete(id);

    if (!humanRessources) {
      return res.status(404).json({
        success: false,
        error: "HumanRessources entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: humanRessources,
    });
  },
};
