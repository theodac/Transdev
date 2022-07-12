const Technical = require("../models/technical.model");
const moment = require("moment");

var express = require('express')
var bodyParser = require('body-parser')

var app = express()


module.exports = {
  async createTechnical(req, res) {
    /*const {
        tauxPannesBusEtTeor,
        consommationBusEtTeorAuxCentsKms,
        consommationTramAuxCentsKms,
        tauxPannesTram,
        kmPerdu,
        dataDate
    } = req.body;*/

    const tauxPannesBusEtTeor = req.body.tauxPannesBusEtTeor;
    const consommationBusEtTeorAuxCentsKms = req.body.consommationBusEtTeorAuxCentsKms;
    const consommationTramAuxCentsKms = req.body.consommationTramAuxCentsKms;
    const tauxPannesTram = req.body.tauxPannesTram;
    const kmPerdu = req.body.kmPerdu;
    const kmPerduAnnee = req.body.kmPerdu.kmPerduAnnee;
    const kmPerduMois = req.body.kmPerdu.kmPerduMois;
    const kmPerduMotif = req.body.kmPerdu.kmPerduMotif;
    const kmPerduMode = req.body.kmPerdu.kmPerduMode;
    const kmPerduValeur = req.body.kmPerdu.kmPerduValeur;

    const dataDate = req.body.dataDate;


    /*const newTechnicalKmPerdu = new TechnicalKmPerdu({
        kmPerduAnnee,
        kmPerduMois,
        kmPerduMotif,
        kmPerduMode,
        kmPerduValeur
    })*/

    const newTechnical = new Technical({
        tauxPannesBusEtTeor,
        consommationBusEtTeorAuxCentsKms,
        consommationTramAuxCentsKms,
        tauxPannesTram,
        kmPerdu,
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
    let technicalEntries = [];
    if (req.query.startDate) {
      if (req.query.endDate && req.query.endDate !== "") {
        technicalEntries = await Technical.find({
          dataDate: {
            $gte: moment.utc(req.query.startDate),
            $lte: moment.utc(req.query.endDate)
          }
        })
      } else {
        technicalEntries = await Technical.find({dataDate: moment.utc(req.query.startDate)})
      }
    } else 
    technicalEntries = await Technical.find();
    
    if(!technicalEntries || technicalEntries.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Exploitation entries not found"
      })
    }

    res.status(200).json({
      success: true,
      data: technicalEntries,
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
