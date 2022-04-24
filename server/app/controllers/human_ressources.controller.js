const HumanRessources = require("../models/human_ressources.model");
const moment = require("moment");

module.exports = {
  async createHumanRessources(req, res) {
    const {
      tauxAbsenteisme,
      tauxGreve,
      tauxRecrutement,
      tauxTurnOver,
      dataDate
    } = req.body;

    const newHumanRessources = new HumanRessources({
      tauxAbsenteisme,
      tauxGreve,
      tauxRecrutement,
      tauxTurnOver,
      dataDate
    });
    await newHumanRessources.save();

    if (!res)
      return;
    res.status(201).json({
      success: true,
      data: newHumanRessources,
    });
  },
  async getHumanRessourcesEntries(req, res) {
    let humanRessourcesEntries = [];
    if (req.body.startDate) {
      if (req.body.endDate && req.body.endDate !== "") {
        humanRessourcesEntries = await HumanRessources.find({
          dataDate: {
            $gte: moment.utc(req.body.startDate),
            $lte: moment.utc(req.body.endDate)
          }
        })
      } else {
        humanRessourcesEntries = await HumanRessources.find({dataDate: moment.utc(req.body.startDate)})
      }
    } else 
    humanRessourcesEntries = await HumanRessources.find();
    
    if(!humanRessourcesEntries || humanRessourcesEntries.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Human ressources entries not found"
      })
    }

    res.status(200).json({
      success: true,
      data: humanRessourcesEntries,
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
