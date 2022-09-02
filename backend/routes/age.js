const express = require('express');
const router = express.Router();
const ageCtrl = require('../controllers/age');


router.post('/', ageCtrl.createAge);
router.get('/', ageCtrl.getAllAges);

module.exports = router;
