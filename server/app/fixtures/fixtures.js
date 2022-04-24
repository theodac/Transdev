const buyingController = require('../controllers/buying.controller');
const commercialController = require('../controllers/commercial.controller');
const exploitationController = require('../controllers/exploitation.controller');
const humanRessourcesController = require('../controllers/human_ressources.controller');
const qualityEnvironmentController = require('../controllers/quality_environment.controller');
const technicalController = require('../controllers/technical.controller');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const loadFixtures = () => {
    for (let i = 12; i > 0; i--) {
        let nbTicket = getRandomArbitrary(10000, 100000);
        let nbSMS = getRandomArbitrary(10000, 100000);

        buyingController.createBuying({
            body: {
                nbTicketsVendus: nbTicket,
                nbTicketsSMS: nbSMS,
                nbTotal: nbTicket + nbSMS,
                ventePopulaire: nbTicket > nbSMS ? 'Ticket' : 'SMS',
                dataDate: '2021-' + i + '-01',
            }
        }).then(r => null);
    }
};

module.exports = {loadFixtures};