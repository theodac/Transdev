const QualityEnvironment = require("../models/quality_environment.model");

module.exports = {
  async createQualityEnvironment(req, res) {
    const {
      nbSituationsInacceptables, 
      nbSituationsInacceptableAvecEvo, 
      communicationsCritereProperte, 
      nbSignalementsNonRespectesPqe,
      dataDate
    } = req.body;

    const newQualityEnvironment = new QualityEnvironment({
      nbSituationsInacceptables, 
      nbSituationsInacceptableAvecEvo, 
      communicationsCritereProperte, 
      nbSignalementsNonRespectesPqe,
      dataDate
    });
    await newQualityEnvironment.save();

    res.status(201).json({
      success: true,
      data: newQualityEnvironment,
    });
  },
  async getQualityEnvironmentEntries(req, res) {
    const qualityEnvironment = await QualityEnvironment.find();

    res.status(200).json({
      success: true,
      data: qualityEnvironment,
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
