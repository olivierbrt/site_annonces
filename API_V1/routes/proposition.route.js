const express = require('express');
const router = express.Router();
const propositionController = require('../controllers/proposition.controller');
const auth = require('../middleware/auth.middleware');
const AnnonceMiddleware = require('../middleware/annonce.middleware');
const isPropOwner = require('../middleware/proposition.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createPropositionSchema, acceptPropositionSchema } = require('../middleware/validators/propositionValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(propositionController.getPropositionsUser)); // localhost:3000/api/v1/propositions
router.post('/', auth(), createPropositionSchema, AnnonceMiddleware.isAnnAvailable(), awaitHandlerFactory(propositionController.createProposition)); // localhost:3000/api/v1/propositions
router.delete('/', auth(), isPropOwner(), awaitHandlerFactory(propositionController.deleteProposition)); // localhost:3000/api/v1/propositions
router.get('/accept', auth(), acceptPropositionSchema, AnnonceMiddleware.isAnnAvailable(), AnnonceMiddleware.isAnnOwner(), awaitHandlerFactory(propositionController.acceptProposition)); // localhost:3000/api/v1/propositions/accept

module.exports = router;