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

  async getNbTotal(req, res){
    let buyingEntries = [];

    buyingEntries = await Buying.find();

    let total = 0;
    //console.log(buyingEntries[0]);
    for(let i = 0; i<buyingEntries.length-1;i++){

        total+=parseInt(buyingEntries[i].nbTotal);
    }

        if(!buyingEntries || buyingEntries.length === 0) {
          return res.status(404).json({
            success: false,
            error: "Buying entries not found"
          })
        }

        res.status(200).json({
          success: true,
          data: total,
        });

  },

  async getBuyingByDate(req, res){
      let buyingEntries = [];
      const { date } = req.params;
      if(date != null){

          buyingEntries = await Buying.find({
          dataDate: {
                  $lte: moment.utc(date)
              }
          });
      }

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

  async getNbTotalByDate(req, res){
      let buyingEntries = [];
      const { date } = req.params;
      if(date != null){

          buyingEntries = await Buying.find({
          dataDate: {
                  $lte: moment.utc(date)
              }
          });
      }


      let total = 0;
      //console.log(buyingEntries[0]);
      for(let i = 0; i<buyingEntries.length-1;i++){

          total+=parseInt(buyingEntries[i].nbTotal);
      }

          if(!buyingEntries || buyingEntries.length === 0) {
            return res.status(404).json({
              success: false,
              error: "Buying entries not found"
            })
          }

          res.status(200).json({
            success: true,
            data: total,
          });

    },

  async getBuyings(req, res) {
    let buyingEntries = [];
    if (req.query.startDate) {
      if (req.query.endDate && req.query.endDate !== "") {
        buyingEntries = await Buying.find({
          dataDate: {
            $gte: moment.utc(req.query.startDate),
            $lte: moment.utc(req.query.endDate)
          }
        })
      } else {
        buyingEntries = await Buying.find({dataDate: moment.utc(req.query.startDate)})
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
