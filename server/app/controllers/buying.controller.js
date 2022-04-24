const Buying = require("../models/buying.model");

module.exports = {
  async createBuying(req, res) {
    const {
      nbTicketsVendus,
      nbTotal,
      nbTicketsSMS,
      ventePopulaire,
      dataDate,
    } = req.body;

    const newBuying = new Buying({
      nbTicketsVendus,
      nbTotal,
      nbTicketsSMS,
      ventePopulaire,
      dataDate,
    });
    await newBuying.save();

    if (!res)
      return;
    res.status(201).json({
      success: true,
      data: newBuying,
    });
  },
  async getBuyings(req, res) {
    const buying = await Buying.find();

    res.status(200).json({
      success: true,
      data: buying,
    });
  },
  async getBuying(req, res) {
    const { id } = req.params;

    const buying = await Buying.findById(id);

    if (!buying) {
      return res.status(404).json({
        success: false,
        error: "Buying not found",
      });
    }

    res.status(200).json({
      success: true,
      data: buying,
    });
  },
  async updateCommercial(req, res) {
    const { id } = req.params;

    const buying = await Buying.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!buying) {
      return res.status(404).json({
        success: false,
        error: "Buying not found",
      });
    }

    res.status(200).json({
      success: true,
      data: buying,
    });
  },
  async deleteBuying(req, res) {
    const { id } = req.params;

    const buying = await Buying.findByIdAndDelete(id);

    if (!buying) {
      return res.status(404).json({
        success: false,
        error: "Buying not found",
      });
    }

    res.status(200).json({
      success: true,
      data: buying,
    });
  },
};
