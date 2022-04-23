const Commercial = require("../models/commercial.model");

module.exports = {
  async createCommercial(req, res) {
    const {
      recetteGlobale,
      nbVentes,
      nbKilometres,
      recetteCommercial,
      nbReclamations,
    } = req.body;

    const newCommercial = new Commercial({
      recetteGlobale,
      nbVentes,
      nbKilometres,
      recetteCommercial,
      nbReclamations,
    });
    await newCommercial.save();

    res.status(201).json({
      success: true,
      data: newCommercial,
    });
  },
  async getCommercials(req, res) {
    const commercial = await Commercial.find();

    res.status(200).json({
      success: true,
      data: commercial,
    });
  },
  async getCommercial(req, res) {
    const { id } = req.params;

    const commercial = await Commercial.findById(id);

    if (!commercial) {
      return res.status(404).json({
        success: false,
        error: "Commercial not found",
      });
    }

    res.status(200).json({
      success: true,
      data: commercial,
    });
  },
  async updateCommercial(req, res) {
    const { id } = req.params;

    const commercial = await Commercial.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!commercial) {
      return res.status(404).json({
        success: false,
        error: "Commercial not found",
      });
    }

    res.status(200).json({
      success: true,
      data: commercial,
    });
  },
  async deleteCommercial(req, res) {
    const { id } = req.params;

    const commercial = await Commercial.findByIdAndDelete(id);

    if (!commercial) {
      return res.status(404).json({
        success: false,
        error: "Commercial not found",
      });
    }

    res.status(200).json({
      success: true,
      data: commercial,
    });
  },
};
