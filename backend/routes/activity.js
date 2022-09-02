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
router.delete('/:id', activityCtrl.deleteActivity);
router.get('/one/:id', activityCtrl.getOneActivity); // accessible par tous
router.patch('/:id', activityCtrl.updateActivity);
router.get('/user/:id', auth, activityCtrl.getUserActivities);
router.get('/:id', auth, activityCtrl.getUserActivity);

module.exports = router;
