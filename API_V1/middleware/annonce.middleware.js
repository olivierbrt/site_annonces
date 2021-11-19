const HttpException = require('../utils/HttpException.utils');
const AnnonceModel = require('../models/annonce.model');


isAnnOwner = () => {
    return async function (req, res, next) {
        try{
            if(!req.body.id_ann){
                throw new HttpException(401, 'id_ann required in body');
            }
    
            const annonce = await AnnonceModel.findOne({ id_ann : req.body.id_ann });
    
            if(!annonce){
                throw new HttpException(401, 'No annonce found!');
            }
            if(annonce.id_user != req.currentUser.id_user){
                throw new HttpException(401, 'You are not the owner of the annonce !');
            }
    
            next();
        }
        catch(e){
            e.status=401;
            next(e);
        } 
    } 
};

isAnnAvailable = () => {
    return async function(req, res, next) {
        try{
            if(!req.body.id_ann){
                throw new HttpException(401, 'id_ann required in body');
            }

            const annonce = await AnnonceModel.findOne({ id_ann : req.body.id_ann, state : '1' });

            if(!annonce){
                throw new HttpException(401, 'No annonce found!');
            }

            next();
        }
        catch(e){
            e.status=401;
            next(e);
        }
    }
};

module.exports = {
    isAnnOwner,
    isAnnAvailable
}