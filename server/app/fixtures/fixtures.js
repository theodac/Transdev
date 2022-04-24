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
        let nbTicket = getRandomInt(10000, 100000);
        let nbSMS = getRandomInt(10000, 100000);

        buyingController.createBuying({
            body: {
                nbTicketsVendus: nbTicket,
                nbTicketsSMS: nbSMS,
                nbTotal: nbTicket + nbSMS,
                ventePopulaire: nbTicket > nbSMS ? 'Ticket' : 'SMS',
                dataDate: '2021-' + displayi + '-01',
            }
        }, null).then(r => null);
    }
};

module.exports = {loadFixtures};