const { body } = require('express-validator');


exports.createAnnonceSchema = [
    body('date_pub')
        .exists()
        .withMessage('date_pub is required')
        .isDate()
        .withMessage('date_pub must be date'),
    body('titre')
        .exists()
        .withMessage('titre is required')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long'),
    body('description')
        .exists()
        .withMessage('description is required')
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long'),
    body('prix')
        .exists()
        .withMessage('description is required')
        .isNumeric()
        .withMessage('prix must be numeric'),
];

exports.updateAnnonceSchema = [
    body('titre')
        .optional()
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long'),
    body('description')
        .optional()
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long'),
    body('prix')
        .optional()
        .isNumeric()
        .withMessage('prix must be numeric')
];