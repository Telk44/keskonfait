const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/index');
const getAuthUserId = require('../middleware/getAuthUserId');
require('dotenv').config();


// inscription new user(ok)
exports.signup = (req, res) => {

    User.findOne({
        attributes: ['email'],
        where: {email: req.body.email}
    })
        .then((user) => {
            if (user) {
                return res.status(400).json({'error': 'user already exists'})
            }
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    console.log(hash)
                    User.create({
                        // id: req.body.id,
                        email: req.body.email,
                        password: hash,
                        lastName: req.body.lastName,
                        firstName: req.body.firstName,
                        userName: req.body.userName,
                        // isAdmin: req.body.isAdmin,
                        // isVerified: req.body.isVerified,
                            // token: jwt.sign(
                            //     { email: req.body.email },
                            //     'process.env.DB_TOKEN',
                            //     { expiresIn: '24h' }
                            // ),
                    })
                        .then((user) => {
                            console.log(user)
                            res.status(201).json({
                                userId: user.id,
                                email: req.body.email,
                                userName: req.body.userName,
                                token: jwt.sign(
                                    {userId: user.id,},
                                    `${process.env.SECRET_KEY}`,
                                    {expiresIn: '30d'}
                                ),
                                message: 'utilisateur connecté et créé'
                            })
                        });
                })
                .catch(error => res.status(400).json({message: 'invalid form!'}));
        })
};

// Fonction login (ok)
exports.login = (req, res, next) => {
    User.findOne({where: {email: req.body.email}})
        .then(user => {
            if (!user) {
                return res.status(401).json({error: 'Utilisateur inconnu !'});
            }
            // if (user.active != 1) {
            //     return res.status(401).send({
            //         message: "Pending Account. Please Verify Your Email!",
            //     });
            // }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({error: 'Mot de passe incorrect !'});
                    }
                    res.status(200).json({
                        user: {
                            userId: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            userName: user.userName,
                            email: req.body.email,
                            password: req.body.password,
                        },
                        userId: user.id,
                        token: jwt.sign(
                            {userId: user.id},
                            `${process.env.SECRET_KEY}`,
                            {expiresIn: '30d'}
                        ),
                        // isAdmin: user.isAdmin,
                        // isVerified: user.isVerified

                    });
                })
                .catch(error => res.status(500).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};

// Suppression d'un compte
exports.deleteAccount = (req, res, next) => {
    User.findOne({where: {id: req.params.id}})
        .then((user) => {
            // if (user.id !== getAuthUserId(req)) {
            //     return res.status(401).json({error})
            // }
            User.destroy({where: {id: req.params.id}})
                .then(() => res.status(200).json({message: 'Compte supprimé'}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};

// Obtention d'un compte (ok)
exports.getOneAccount = (req, res, next) => {
    User.findOne({where: {id: req.params.id}})

        .then((user) => res.status(200).json(user))
        .catch(error => res.status(404).json({error,  message: 'le serveur ne récupère pas le profile'}));
};


exports.modifyAccount = (req, res, next) => {
    const userObject =  {
        ...req.body
    };
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then((user) => {
            if (user.id !== getAuthUserId(req)) {
                return res.status(401).json({
                    error
                })
            }
            user.update({
                ...userObject
            }, {
                where: {
                    id: req.params.id
                }
            })
                .then((user) => res.status(200).json({
                    message: "Profil à jour !",
                    user: {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        userName: user.userName
                    }

                }))
                .catch(error => res.status(405).json({
                    error
                }))
        });
}

//récupération tous les comptes
exports.getAllAccounts = (req, res, next) => {
    User.findAll()
        .then((users) => res.status(200).json(users))
        // console.log(users)
        .catch(error => res.status(400).json({error}));
};

