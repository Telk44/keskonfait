const {Age, Activity} = require("../models/index");

exports.createAge = (req, res, next) => {
    Age.create({
            childrenAge: req.body.childrenAge
    })
        .then(() => res.status(200).json({

            message: 'Age créé'
        }))
        .catch(error => res.status(400).json({error, message: 'oups, ça passe pas! '}))
}
// Obtention des ages
exports.getAllAges = (req, res, next) => {
    Age.findAll({
            include:Activity,
        }
    )
        .then((answers) => res.status(200).json(answers))
        .catch(error => res.status(400).json({ error }));
};