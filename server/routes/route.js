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
    postFollowSMS,
    editPatientFollow
 } = require('../controllers/followUp');

const { 
    postAvail, 
    editAvai, 
    getAvail,
    deleteAvail,
    toggleAvail
} = require('../controllers/availability');

const { 
    postSpeacial, 
    editSpeacial, 
    getSpeacial,
    deleteSpeacial,
    toggleSpeacial
} = require('../controllers/specialization');

const { 
    postOperator, 
    editOperator, 
    getOperator,
    deleteOperator,
    toggleOperator
} = require('../controllers/operator');

const { 
    postSMS, 
    editSMS, 
    getSMS,
    deleteSMS
} = require('../controllers/smsTem');

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
router.get('/get-follow-image/:filename', getFollowImage);
router.post('/post-follow-sms/:id', postFollowSMS);
router.post('/edit-patient-follow/:id', editPatientFollow);

//Availability Route URL
router.post('/post-avail', postAvail);
router.post('/edit-avail/:id', editAvai);
router.get('/get-avail', getAvail);
router.delete('/delete-avail/:id', deleteAvail);
router.post('/toggle-avail/:id', toggleAvail);

//Specialization Route URL
router.post('/post-speacial', postSpeacial);
router.post('/edit-speacial/:id', editSpeacial);
router.get('/get-speacial', getSpeacial);
router.delete('delete-speacial/:id', deleteSpeacial);
router.post('/toggle-speacial/:id', toggleSpeacial);

//Operator Route URL
router.post('/post-operator', postOperator);
router.post('/edit-operator/:id', editOperator);
router.get('/get-operator', getOperator);
router.delete('/delete-operator/:id', deleteOperator);
router.post('/toggle-operator/:id', toggleOperator);

//SMSTem Route URL 
router.post('/post-sms', postSMS);
router.post('/edit-sms/:id', editSMS);
router.get('/get-sms', getSMS);
router.delete('/delete-sms/:id', deleteSMS);


module.exports = router;