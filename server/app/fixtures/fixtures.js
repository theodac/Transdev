const buyingController = require('../controllers/buying.controller');
const commercialController = require('../controllers/commercial.controller');
const exploitationController = require('../controllers/exploitation.controller');
const humanRessourcesController = require('../controllers/human_ressources.controller');
const qualityEnvironmentController = require('../controllers/quality_environment.controller');
const technicalController = require('../controllers/technical.controller');
const exploitationv2Controller = require('../controllers_v2/exploitation_v2.controller');

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

        let categories = ['CAT1', 'CAT2', 'CAT3'];
        let recetteCategorie = categories[Math.floor(Math.random()*categories.length)];

        let recetteMois = getRandomInt(1, 12);
        let recetteAnnee = getRandomInt(2000, 2020);
        let recetteSommeValeurHT = getRandomInt(100, 10000);

        let nbReclamationNumeroDossier = getRandomInt(1, 10000);

        let rMotif = ['motif1', 'motif2', 'motif3'];
        let reclamationMotif = rMotif[Math.floor(Math.random()*rMotif.length)];
        let nombreReclamations = getRandomInt(1, 100);



        commercialController.createCommercial({
            body: {
                recetteGlobale: recetteGlobale,
                nbNouveauxAbonnements: nbNouveauxAbonnements,
                nbNouveauxPartenaires: nbNouveauxPartenaires,
                nbReclamations: nbReclamations,
                recette: [{
                    recetteCategorie:recetteCategorie,
                    recetteSommeValeurHT:recetteSommeValeurHT,
                }],
                reclamation: [{
                    nombreReclamations:nombreReclamations,
                    reclamationMotif:reclamationMotif
                }],
                dataDate: '2021-' + displayi + '-01'
            }
        }, null).then(r => null);

        let raison = '';
        let raisons = ['INFORMATIQUE', 'HUMAINE', 'INTEMPÉRIE'];
        raison = raisons[Math.floor(Math.random()*raisons.length)];

        let nbAccidentsMateriels = getRandomInt(0, 5);
        let nbAccidentsCorporels = getRandomInt(0, 5);
        let tauxControle = getRandomInt(10, 100);

        let tauxFraude = getRandomInt(1, 100);
        let accidentologieNombre = getRandomInt(1, 100);

        let tauxRecouvrementNbNumPV = getRandomInt(0, 7);
        let tauxRecouvrementTotalAmendePaye = getRandomInt(0, 10);

        let fraudeControleClientControle = getRandomInt(0, 1000);
        let fraudeControleValidation = getRandomInt(0, 1000);
        let fraudeControleTotalAmendes = getRandomInt(0, 10);

        let lignes = ['l1', 'l2', 'l3'];
        let accidentologieKmLigne = lignes[Math.floor(Math.random()*lignes.length)];

        let accidentologieKmRealise = getRandomInt(0, 1000);
        let categories2 = ['c1', 'c2', 'c3'];
        let accidentologieKmCategorie2 = categories2[Math.floor(Math.random()*categories2.length)];


        let referenceDossiers = ['rd1', 'rd2', 'rd3'];
        let accidentologieReferenceDossier = referenceDossiers[Math.floor(Math.random()*referenceDossiers.length)];
        let modes = ['BUS', 'METRO', 'TEOR'];
        let accidentologieMode = modes[Math.floor(Math.random()*modes.length)];

        let accidentologieLigne = lignes[Math.floor(Math.random()*lignes.length)];

        exploitationController.createExploitation({
            body: {
                nbAccidentsMateriels: nbAccidentsMateriels,
                nbAccidentsCorporels: nbAccidentsCorporels,
                causeAccident: raison,
                tauxControle: tauxControle,
                accidentologieReferenceDossier:[{
                    accidentologieReferenceDossier:accidentologieReferenceDossier,
                    accidentologieMode:accidentologieMode,
                    accidentologieLigne:accidentologieLigne
                }],
                tauxRecouvrement:[{
                    tauxRecouvrementNbNumPV:tauxRecouvrementNbNumPV,
                    tauxRecouvrementTotalAmendePaye:tauxRecouvrementTotalAmendePaye
                }],
                tauxFraudeTauxControle:[{
                    fraudeControleClientControle:fraudeControleClientControle,
                    fraudeControleValidation:fraudeControleValidation,
                    fraudeControleTotalAmendes:fraudeControleTotalAmendes
                }],
                accidentologieKm:[{
                    accidentologieKmLigne:accidentologieKmLigne,
                    accidentologieKmRealise:accidentologieKmRealise,
                    accidentologieKmCategorie2:accidentologieKmCategorie2
                }],

                dataDate: '2021-' + displayi + '-01'
            }
        }, null).then(r => null);

        exploitationv2Controller.createExploitation({
            body: {
                nbAccidentsMateriels: nbAccidentsMateriels,
                nbAccidentsCorporels: nbAccidentsCorporels,
                causeAccident: raison,
                tauxControle: tauxControle,
                tauxFraude : tauxFraude,
                accidentologie:[{
                    ligne:accidentologieLigne,
                    mode:accidentologieMode,
                    nombre:accidentologieNombre
                }],

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

        let kmPerduAnnee = getRandomInt(2010, 2020);
        let kmPerduMois = getRandomInt(1,12)
        let motifs = ['ACCIDENT', 'AGRESSION', 'BOUCHON'];
        let kmPerduMotif = motifs[Math.floor(Math.random()*motifs.length)];
        let kmPerduMode = modes[Math.floor(Math.random()*modes.length)];
        let kmPerduValeur = getRandomInt(10,10000);


        technicalController.createTechnical({
            body: {
                tauxPannesBusEtTeor: tauxPannesBusEtTeor,
                consommationBusEtTeorAuxCentsKms: consommationBusEtTeorAuxCentsKms,
                consommationTramAuxCentsKms: consommationTramAuxCentsKms,
                tauxPannesTram: tauxPannesTram,
                kmPerdu: [{
                    kmPerduMotif:kmPerduMotif,
                    kmPerduMode:kmPerduMode,
                    kmPerduValeur:kmPerduValeur
                }],
                dataDate: '2021-' + displayi + '-01'
            }
        }, null).then(r => null);
    }
};

module.exports = {loadFixtures};