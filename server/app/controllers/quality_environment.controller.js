const QualityEnvironment = require("../models/quality_environment.model");
const moment = require("moment");

module.exports = {
  async createQualityEnvironment(req, res) {
    const {
      nbSignalementsQualiteEnvironement,
      impactCarbone,
      incidentsEnvironnementaux,
      budgetEnvironnement,
      dataDate
    } = req.body;

    const newQualityEnvironment = new QualityEnvironment({
      nbSignalementsQualiteEnvironement,
      impactCarbone,
      incidentsEnvironnementaux,
      budgetEnvironnement,
      dataDate
    });
    await newQualityEnvironment.save();

    if (!res)
      return;
    res.status(201).json({
      success: true,
      data: newQualityEnvironment,
    });
  },
  async getQualityEnvironmentEntries(req, res) {
    let qualityEnvironmentEntries = [];
    if (req.body.startDate) {
      if (req.body.endDate && req.body.endDate !== "") {
        qualityEnvironmentEntries = await QualityEnvironment.find({
          dataDate: {
            $gte: moment.utc(req.body.startDate),
            $lte: moment.utc(req.body.endDate)
          }
        })
      } else {
        qualityEnvironmentEntries = await QualityEnvironment.find({dataDate: moment.utc(req.body.startDate)})
      }
    } else 
    qualityEnvironmentEntries = await QualityEnvironment.find();
    
    if(!qualityEnvironmentEntries || qualityEnvironmentEntries.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Quality & environment entries not found"
      })
    }

    res.status(200).json({
      success: true,
      data: qualityEnvironmentEntries,
    });
  },
  async getQualityEnvironmentEntry(req, res) {
    const { id } = req.params;

    const qualityEnvironment = await QualityEnvironment.findById(id);

    if (!qualityEnvironment) {
      return res.status(404).json({
        success: false,
        error: "QualityEnvironment entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: qualityEnvironment,
    });
  },
  async updateQualityEnvironment(req, res) {
    const { id } = req.params;

    const qualityEnvironment = await QualityEnvironment.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!qualityEnvironment) {
      return res.status(404).json({
        success: false,
        error: "QualityEnvironment entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: qualityEnvironment,
    });
  },
  async deleteQualityEnvironment(req, res) {
    const { id } = req.params;

    const qualityEnvironment = await QualityEnvironment.findByIdAndDelete(id);

    if (!qualityEnvironment) {
      return res.status(404).json({
        success: false,
        error: "QualityEnvironment entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: qualityEnvironment,
    });
  },
};
