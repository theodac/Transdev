const buyingController = require('../controllers/buying.controller');
const commercialController = require('../controllers/commercial.controller');
const exploitationController = require('../controllers/exploitation.controller');
const humanRessourcesController = require('../controllers/human_ressources.controller');
const qualityEnvironmentController = require('../controllers/quality_environment.controller');
const technicalController = require('../controllers/technical.controller');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const loadFixtures = () => {
    for (let i = 1; i <= 12; i++) {
        let displayi = '';
        if (i < 10)
            displayi = '0'+ i;
        else
            displayi = i;
        let nbTicket = getRandomInt(7500, 15000);
        let nbSMS = getRandomInt(7500, 15000);

        buyingController.createBuying({
            body: {
                nbTicketsVendus: nbTicket,
                nbTicketsSMS: nbSMS,
                nbTotal: nbTicket + nbSMS,
                ventePopulaire: nbTicket > nbSMS ? 'Ticket' : 'SMS',
                dataDate: '2021-' + displayi + '-01',
            }
        }, null).then(r => null);

        let recetteGlobale = getRandomInt(15000, 40000);
        let nbNouveauxAbonnements = getRandomInt(10, 500);
        let nbNouveauxPartenaires = getRandomInt(1, 20);
        let nbReclamations = getRandomInt(0, 1);
        commercialController.createCommercial({
            body: {
                recetteGlobale: recetteGlobale,
                nbNouveauxAbonnements: nbNouveauxAbonnements,
                nbNouveauxPartenaires: nbNouveauxPartenaires,
                nbReclamations: nbReclamations,
                dataDate: '2021-' + displayi + '-01'
            }
        }, null).then(r => null);

        let raison = '';
        let raisons = ['INFORMATIQUE', 'HUMAINE', 'INTEMPÉRIE'];
        raison = raisons[Math.floor(Math.random()*raisons.length)];

        let nbAccidentsMateriels = getRandomInt(0, 5);
        let nbAccidentsCorporels = getRandomInt(0, 5);
        let tauxControle = getRandomInt(10, 100);
        exploitationController.createExploitation({
            body: {
                nbAccidentsMateriels: nbAccidentsMateriels,
                nbAccidentsCorporels: nbAccidentsCorporels,
                causeAccident: raison,
                tauxControle: tauxControle,
                dataDate: '2021-' + displayi + '-01'
            }
        }, null).then(r => null);

        let tauxAbsenteisme = getRandomInt(5, 15);
        let tauxGreve = getRandomInt(0, 1);
        let tauxTurnOver = getRandomInt(1, 3);
        let tauxRecrutement = getRandomInt(1, 2);
        humanRessourcesController.createHumanRessources({
            body: {
                tauxAbsenteisme: tauxAbsenteisme,
                tauxGreve: tauxGreve,
                tauxTurnOver: tauxTurnOver,
                tauxRecrutement: tauxRecrutement,
                dataDate: '2021-' + displayi + '-01'
            }
        }, null).then(r => null);

        let nbSignalementsQualiteEnvironement = getRandomInt(0, 5);
        let impactCarbone = getRandomInt(300, 600);
        let incidentsEnvironnementaux = getRandomInt(0, 1);
        let budgetEnvironnement = getRandomInt(50000, 100000);
        qualityEnvironmentController.createQualityEnvironment({
            body: {
                nbSignalementsQualiteEnvironement: nbSignalementsQualiteEnvironement,
                impactCarbone: impactCarbone,
                incidentsEnvironnementaux: incidentsEnvironnementaux,
                budgetEnvironnement: budgetEnvironnement,
                dataDate: '2021-' + displayi + '-01'
            }
        }, null).then(r => null);

        let tauxPannesBusEtTeor = getRandomInt(0, 5);
        let consommationBusEtTeorAuxCentsKms = getRandomInt(30, 60); // L
        let consommationTramAuxCentsKms = getRandomInt(10, 30); // Wh
        let tauxPannesTram = getRandomInt(0, 2);
        technicalController.createTechnical({
            body: {
                tauxPannesBusEtTeor: tauxPannesBusEtTeor,
                consommationBusEtTeorAuxCentsKms: consommationBusEtTeorAuxCentsKms,
                consommationTramAuxCentsKms: consommationTramAuxCentsKms,
                tauxPannesTram: tauxPannesTram,
                dataDate: '2021-' + displayi + '-01'
            }
        }, null).then(r => null);
    }
};

module.exports = {loadFixtures};
