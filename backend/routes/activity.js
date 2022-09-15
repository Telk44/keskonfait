const express = require('express');
const router = express.Router();
const activityCtrl = require('../controllers/activity');
const auth = require('../middleware/auth')
// const multer = require('../middleware/multer')

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })


router.post('/', auth, upload.single('imageURL'), activityCtrl.createActivity);
router.get('/',  activityCtrl.findAllActivities);
router.delete('/:id', activityCtrl.deleteActivity); //supprimer une activité
router.get('/one/:id', activityCtrl.getOneActivity); // accessible par tous
router.patch('/:id', activityCtrl.updateActivity); //update activity
router.get('/user/:id', auth, activityCtrl.getUserActivities);// toutes les activité pour user authentifié
router.get('/:id', activityCtrl.getUserActivity);// une activité pour user authentifié
// router.get('/:id', auth, activityCtrl.getUserActivity);// une activité pour user authentifié

module.exports = router;
