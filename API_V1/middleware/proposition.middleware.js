const HttpException = require('../utils/HttpException.utils');
const PropositionModel = require('../models/proposition.model');


const isPropOwner = ()=>{
    return async function isPropOwner(req, res, next) {
        try{
            if(!req.body.id){
                throw new HttpException(401, 'id required in body');
            }

            const proposition = await PropositionModel.findOne({ id_prop : req.body.id });

            if(!proposition){
                throw new HttpException(401, 'No proposition found!');
            }

            if(proposition.id_user != req.currentUser.id_user){
                throw new HttpException(401, 'You are not the owner of the proposition !');
            }

            next();
        }
        catch(e){
            e.status=401;
            next(e);
        }
    }
};

module.exports = isPropOwner;