const PropositionModel = require('../models/proposition.model');
const AnnonceModel = require('../models/annonce.model');
const SalesModel = require('../models/sales.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

/******************************************************************************
 *                              Annonce Controller
 ******************************************************************************/
class PropositionController {

    getUserPropositions = async (req, res, next) => {
        const annonce = await PropositionModel.find(req.body);

        res.send(annonce);
    };

    createProposition = async (req, res, next) => {
        this.checkValidation(req);
        const result = await PropositionModel.create({...req.body, id_user : req.currentUser.id_user});

        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('proposition was created!');
    };

    deleteProposition = async (req, res, next) => {
        const result = await PropositionModel.delete(req.params.id);
        if (!result) {
            throw new HttpException(404, 'proposition not found');
        }
        res.send('proposition has been deleted');
    };

    acceptProposition = async(req, res, next) => {
        let result = await AnnonceModel.delete(req.body.id_ann);
        if (!result) {
            throw new HttpException(404, 'annonce not found');
        }

        result = await SalesModel.create({...req.body, id_user : req.currentUser.id_user});
        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        result = await PropositionModel.delete(req.body.id_prop);
        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.send('proposition accepted');
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new PropositionController;