const {Activity, User, Age, Category} = require('../models/index');
const {Op, where} = require("sequelize");
const getAuthUserId = require("../middleware/getAuthUserId");
const fs = require('fs');
const {formatSqlToJsonresponse} = require('../services/activityService')
const {debug} = require("nodemon/lib/utils");


// Création d'une activité(test ok)

exports.createActivity = (req, res, next) => {
    const file = req.file
    console.log(file)
    const activityData = {
        userId: getAuthUserId(req),
        categoryId: req.body.categoryId,
        ageId: req.body.ageId,
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        price: req.body.price,
        phone: req.body.phone,
        bookingEmail: req.body.bookingEmail,
        imageURL: file.path
    }

    Activity.create(activityData, {
            include: [
                {
                    model: User,
                    attributes: ['firstname', 'lastname', 'userName']
                },
                {
                    model: Age,
                    attributes: ["childrenAge"],
                },
                {
                    model: Category,
                    attributes: ["name"],
                }
            ]
        }
    )
        .then((activity) => res.status(200).json(activity))
        .catch(error => res.status(500).json({error, message: 'oups, ça passe pas! '}))

}


//Liste de toutes les activités(test ok)

exports.findAllActivities = (req, res, next) => {
    Activity.findAll({
        include: [
            {
                model: User,
                attributes: ['firstname', 'lastname', 'userName']
            },
            {
                model: Age,
                attributes: ["childrenAge"],

            },
            {
                model: Category,
                attributes: ["name"],
            }
        ],
        order: [['startDate', 'ASC']]

    })
        .then((activities) => {

            const formatedActivities = activities.map(activity => formatSqlToJsonresponse(activity))
            res.status(200).json(formatedActivities)
        })
        .catch(error => res.status(500).json({error}))
}

// Liste de toutes les activités d'un utilisateur(test ok)

exports.getUserActivities = (req, res, next) => {
    Activity.findAll({
            where: {userId: getAuthUserId(req)},
            order: [['createdAt', 'DESC']]
        },
    )
        .then((activities) => {
            const formatedActivities = activities.map(activity => formatSqlToJsonresponse(activity))

            res.status(200).json(formatedActivities)
        })
        .catch(error => res.status(500).json({error}))
}
//trouver une activité pour un utilisateur connecté (test ok)

exports.getUserActivity = (req, res, next) => {

    Activity.findOne(
        {
            where: {userId: getAuthUserId(req), id: req.params.id},
            include: [
                {
                    model: User,
                    attributes: ['firstname', 'lastname', 'userName']
                },
                {
                    model: Age,
                    attributes: ["childrenAge"],

                },
                {
                    model: Category,
                    attributes: ["name"],
                }
            ],
        }
    )
        .then(activity => res.status(200).json(formatSqlToJsonresponse(activity)))
        .catch(error => res.status(500).json({error}))

}


//Supprimer une activité

exports.deleteActivity = (req, res, next) => {
    Activity.destroy({
        where: {id: req.params.id}
    })
        .then(() => res.status(200).json({message: 'Activité supprimée'}))
        .catch(error => res.status(500).json({error}))
};


//Modifier une activité
exports.updateActivity = (req, res, next) => {
    Activity.update({
        categoryId: req.body.categoryId,
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        price: req.body.price,
        phone: req.body.phone,
        bookingEmail: req.body.bookingEmail,
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(res => res.status(200).json({
            message: "Activité modifiée"
        }))
        .catch(error => res.status(500).json({error}));
}


//Trouver une activité par Id pour utilisateur non connecté
exports.getOneActivity = (req, res, next) => {
    Activity.findOne(
        {
            where: {id: req.params.id},
            include: [
                {
                    model: User,
                    attributes: ['firstname', 'lastname', 'userName']
                },
                {
                    model: Age,
                    attributes: ["childrenAge"],
                },
                {
                    model: Category,
                    attributes: ["name"],
                }
            ]

        }
    )
        .then(activity => res.status(200).json(formatSqlToJsonresponse(activity)))
        .catch(error => res.status(500).json({error}));
};

