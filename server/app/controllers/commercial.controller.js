const Commercial = require("../models/commercial.model");
const Moment = require("moment");

module.exports = {
  async createCommercial(req, res) {
    const {
      recetteGlobale,
      nbNouveauxAbonnements,
      nbNouveauxPartenaires,
      nbReclamations,
      dataDate
    } = req.body;

    const newCommercial = new Commercial({
      recetteGlobale,
      nbNouveauxAbonnements,
      nbNouveauxPartenaires,
      nbReclamations,
      dataDate
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
        error: "Commercial entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: commercial,
    });
  },
  async getCommercialsByDate(req, res) {
    const { startDate, endDate } = req.params;

    const commercials = []
    if (endDate !== null || endDate !== "") {
      commercials = await Commercial.find({
        dataDate: {
          $gte: startDate.toDate(),
          $lte: endDate.toDate()
        }
      })
    } else {
      commercials = await Commercial.find({dataDate: startDate.toDate()})
    }

    if(!commercials || commercials.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Commercial entries not found"
      })
    }

    res.status(200).json({
      success: true,
      data: commercials
    })
  },
  async updateCommercial(req, res) {
    const { id } = req.params;

    const commercial = await Commercial.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!commercial) {
      return res.status(404).json({
        success: false,
        error: "Commercial entry not found",
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
        error: "Commercial entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: commercial,
    });
  },
};
