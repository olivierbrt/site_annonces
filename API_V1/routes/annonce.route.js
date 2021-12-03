const express = require('express');
const router = express.Router();
const annonceController = require('../controllers/annonce.controller');
const auth = require('../middleware/auth.middleware');
const AnnonceMiddleware = require('../middleware/annonce.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createAnnonceSchema, updateAnnonceSchema } = require('../middleware/validators/annonceValidator.middleware');


router.get('/', awaitHandlerFactory(annonceController.getAllAnnonces)); // localhost:3000/api/annonces
router.get('/myannonces', auth(), awaitHandlerFactory(annonceController.getMyAnnonces)); // localhost:3000/api/annonces/myannonces
router.post('/', auth(), createAnnonceSchema, awaitHandlerFactory(annonceController.createAnnonce)); // localhost:3000/api/annonces
router.delete('/', auth(), AnnonceMiddleware.isAnnOwner(), AnnonceMiddleware.isAnnAvailable(), awaitHandlerFactory(annonceController.deleteAnnonce)); // localhost:3000/api/annonces
router.put('/:id', auth(), updateAnnonceSchema, AnnonceMiddleware.isAnnOwner(), AnnonceMiddleware.isAnnAvailable(), awaitHandlerFactory(annonceController.updateAnnonce)); // localhost:3000/api/annonces/:id
router.get('/id/:id', awaitHandlerFactory(annonceController.getAnnonceById)); // localhost:3000/api/annonces/id/1
router.get('/title/:title', awaitHandlerFactory(annonceController.getAnnonceByTitle)); // localhost:3000/api/annonces/:title
router.get('/user/:username', awaitHandlerFactory(annonceController.getUserAnnonces)); // localhost:3000/api/annonces/user/:username
router.get('/buy', auth(), AnnonceMiddleware.isAnnAvailable(), awaitHandlerFactory(annonceController.buyAnnonce)); // localhost:3000/api/annonces/buy)

module.exports = router;