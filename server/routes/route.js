const express = require('express');
const path = require('path');
let multer = require('multer');

const { 
    postPatient, 
    editPatient,
    getPatient
} = require('../controllers/patient');

const { 
    postDoctor, 
    editDoctor, 
    getDoctor,
    deleteDoctor,
    toggleDoctor
} = require('../controllers/doctor');

const { 
    postChamber, 
    editChamber, 
    getChamber,
    deleteChamber,
    toggleChamber
} = require('../controllers/chamber');

const { 
    postTime, 
    editTime, 
    getTime,
    deleteTime,
    toggleTime
} = require('../controllers/time');

const { 
    postFollow, 
    editFollow, 
    postFollowImage,
    getFollow,
    getFollowImage,
    postFollowSMS
 } = require('../controllers/followUp');

const router = express.Router();

//For File Upload
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage });

//Patient Route URL
router.post('/post-patient', postPatient);
router.post('/edit-patient/:id', editPatient);
router.get('/get-patient', getPatient);

//Doctor Route URL
router.post('/post-doctor', postDoctor);
router.post('/post-doctor/:id', editDoctor);
router.get('/get-doctor', getDoctor);
router.delete('/delete-doctor/:id', deleteDoctor);
router.post('/toggle-doctor/:id', toggleDoctor);

//Chamber Router URL
router.post('/post-chamber', postChamber);
router.post('/edit-chamber/:id', editChamber);
router.get('/get-chamber', getChamber);
router.delete('/delete-chamber/:id', deleteChamber);
router.post('/toggle-chamber/:id', toggleChamber);

//Time Router URL 
router.post('/post-time', postTime);
router.post('/edit-time/:id', editTime);
router.get('/get-time', getTime);
router.delete('delete-time/:id', deleteTime);
router.post('/toggle-time/:id', toggleTime);

//FollowUp Router URL
router.post('/post-follow', postFollow);
router.post('/edit-follow/:id', editFollow);
router.post('/post-follow-image', upload.array('photo', 10), postFollowImage);
router.get('/get-follow', getFollow);
router.get('/get-follow-image', getFollowImage);
router.post('/post-follow-sms', postFollowSMS);



module.exports = router;