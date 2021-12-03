const AnnonceModel = require('../models/annonce.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

/******************************************************************************
 *                              Annonce Controller
 ******************************************************************************/
class AnnonceController {
    getAllAnnonces = async (req, res, next) => {
        let annonceList = await AnnonceModel.find({state : '1'});
        if (!annonceList.length) {
            throw new HttpException(404, 'annonces not found');
        }

        res.send(annonceList);
    };

    getAnnonceById = async (req, res, next) => {
        const annonce = await AnnonceModel.findOne({ id_ann : req.params.id });
        if (!annonce) {
            throw new HttpException(404, 'annonce not found');
        }

        res.send(annonce);
    };

    getAnnonceByTitle = async (req, res, next) => {
        const annonce = await AnnonceModel.findOne({ titre : req.params.titre });
        if (!annonce) {
            throw new HttpException(404, 'annonce not found');
        }

        res.send(annonce);
    };

    getUserAnnonces = async (req, res, next) => {
        const annonce = await AnnonceModel.findByUserName(req.params.username);

        res.send(annonce);
    };

    getMyAnnonces = async (req, res, next) => {
        const annonce = await AnnonceModel.findByUserName(req.currentUser.username);

        res.send(annonce);
    };

    createAnnonce = async (req, res, next) => {
        this.checkValidation(req);
        const result = await AnnonceModel.create({...req.body, id_user : req.currentUser.id_user});

        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('annonce was created!');
    };

    updateAnnonce = async (req, res, next) => {
        this.checkValidation(req);
        const { id_ann, id_user, state, date_pub, ...restOfUpdates } = req.body;
        // do the update query and get the result
        // it can be partial edit
        const result = await AnnonceModel.update(restOfUpdates, req.params.id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'annonce not found' :
            affectedRows && changedRows ? 'annonce updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    deleteAnnonce = async (req, res, next) => {
        const result = await AnnonceModel.delete(req.body.id);
        if (!result) {
            throw new HttpException(404, 'annonce not found');
        }
        res.send('annonce has been deleted');
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
module.exports = new AnnonceController;