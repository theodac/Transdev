const Buying = require("../models/buying.model");
const moment = require("moment");

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
    let buyingEntries = [];
    if (req.body.startDate) {
      if (req.body.endDate && req.body.endDate !== "") {
        buyingEntries = await Buying.find({
          dataDate: {
            $gte: moment.utc(req.body.startDate),
            $lte: moment.utc(req.body.endDate)
          }
        })
      } else {
        buyingEntries = await Buying.find({dataDate: moment.utc(req.body.startDate)})
      }
    } else 
    buyingEntries = await Buying.find();
    
    if(!buyingEntries || buyingEntries.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Buying entries not found"
      })
    }

    res.status(200).json({
      success: true,
      data: buyingEntries,
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
