const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const user = require('../middleware/user');

router.post('/signup', user, userCtrl.signup); //nouvel utilisateur
router.post('/login', user, userCtrl.login); //connexion utilisateur
router.delete('/:id', auth, userCtrl.deleteAccount); //supprimer un profil
router.get('/:id', auth, userCtrl.getOneAccount); //recuperer un profil
router.put('/:id', auth, userCtrl.modifyAccount); //modifier un profil
router.get('/',  userCtrl.getAllAccounts); //recuperer tous les profils


module.exports = router;
