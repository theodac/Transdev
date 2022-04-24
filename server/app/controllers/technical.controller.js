const Technical = require("../models/technical.model");

module.exports = {
  async createTechnical(req, res) {
    const {
        tauxPannesBusEtTeor,
        consommationBusEtTeorAuxCentsKms,
        consommationTramAuxCentsKms,
        tauxPannesTram,
        dataDate
    } = req.body;

    const newTechnical = new Technical({
        tauxPannesBusEtTeor,
        consommationBusEtTeorAuxCentsKms,
        consommationTramAuxCentsKms,
        tauxPannesTram,
        dataDate
    });
    await newTechnical.save();

    if (!res)
      return;
    res.status(201).json({
      success: true,
      data: newTechnical,
    });
  },
  async getTechnicalEntries(req, res) {
    const technical = await Technical.find();

    res.status(200).json({
      success: true,
      data: technical,
    });
  },
  async getTechnicalEntry(req, res) {
    const { id } = req.params;

    const technical = await Technical.findById(id);

    if (!technical) {
      return res.status(404).json({
        success: false,
        error: "Technical entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: technical,
    });
  },
  async updateTechnical(req, res) {
    const { id } = req.params;

    const technical = await Technical.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!technical) {
      return res.status(404).json({
        success: false,
        error: "Technical entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: technical,
    });
  },
  async deleteTechnical(req, res) {
    const { id } = req.params;

    const technical = await Technical.findByIdAndDelete(id);

    if (!technical) {
      return res.status(404).json({
        success: false,
        error: "Technical entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: technical,
    });
  },
};
