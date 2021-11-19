const { body } = require('express-validator');


exports.createPropositionSchema = [
    body('id_ann')
        .exists()
        .withMessage('id_ann is required')
        .isNumeric()
        .withMessage('id_ann must be numeric'),
    body('date_prop')
        .exists()
        .withMessage('date_prop is required')
        .isDate()
        .withMessage('date_prop must be date'),
    body('proposition')
        .exists()
        .withMessage('proposition is required')
        .isNumeric()
        .withMessage('proposition must be numeric'),
    body('message')
        .optional()
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')
];

exports.acceptPropositionSchema = [
    body('id_ann')
        .exists()
        .withMessage('id_ann is required')
        .isNumeric()
        .withMessage('id_ann must be numeric'),
    body('date_sale')
        .exists()
        .withMessage('date_sale is required')
        .isDate()
        .withMessage('date_sale must be date'),
];