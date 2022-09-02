const {Category} = require("../models/index");

exports.createCategory = (req, res, next) => {
    Category.create({
        name: req.body.name
    })
        .then(() => res.status(200).json({

            message: 'Catégorie créé'
        }))
        .catch(error => res.status(400).json({error, message: 'oups, ça passe pas! '}))
}