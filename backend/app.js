const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const {sequelize, User} = require('./models');
const userRoutes = require("./routes/user");
const activityRoutes = require("./routes/activity");
const ageRoutes = require("./routes/age");
const categoryRoutes = require("./routes/category");
const cors = require('cors')

// sequelize
//     .authenticate()
//     .then(() => {
//         // console.log('connexion à la bdd ok');
//         sequelize.sync({  //synchronisation à la bdd
//             // force:true
//         })
//     })
//     .catch(error => {
//         console.log(error);
//     });

const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 40 // L'utilisateur pourra faire 40 requêtes toutes les 10 minutes//
});


const app = express();
app.use(express.json());
app.use(cors())


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/auth', userRoutes);
app.use('/activity', activityRoutes);
app.use('/age', ageRoutes);
app.use('/category', categoryRoutes);

//rendre les images accessibles publiquement pour toutes les requêtes vers la route /images
app.use('/images', express.static( 'images'));

//securise les en-têtes HTTP//
// app.use(helmet());

// limite de 40 requêtes toutes les 10 minutes effective sur toutes les routes //
app.use(limiter);

module.exports = app;
