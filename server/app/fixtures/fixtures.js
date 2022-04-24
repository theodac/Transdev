const faker = require('faker');
const buyingController = require('../controllers/buying.controller');
const commercialController = require('../controllers/commercial.controller');
const exploitationController = require('../controllers/exploitation.controller');
const humanRessourcesController = require('../controllers/human_ressources.controller');
const qualityEnvironmentController = require('../controllers/quality_environment.controller');
const technicalController = require('../controllers/technical.controller');

const loadFixtures = () => {
    console.log(faker.internet.email())
};

// for (let i = 12; i > 0; i--) {
//     let buyingEntries = {
//         nbCommandesPassees: { secteur: secteur, valeur: getRandomArbitrary(1000, 10000)},
//         nbCreationNouveauxFournisseurs: getRandomArbitrary(10, 100),
//         tauxAchatsFournisseursLocauxMetropole: getRandomArbitrary(1, 10),
//         tauxAchatsFournisseursLocauxNormandie: getRandomArbitrary(10, 30),
//         tauxAchatsFournisseursLocauxAutre: getRandomArbitrary(30, 50),
//         tauxFournisseursCertifISO: getRandomArbitrary(10, 100),
//         dataDate: 
//     }
// }




function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = { loadFixtures };