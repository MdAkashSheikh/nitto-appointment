const specialistSc = require("../models/specialistSc");

const postSpeacial = async(req, res) => {
    const specialist = req.body.specialist;
    const details = req.body.details;

    try {
        await specialistSc.create({
            "specialist": specialist,
            "details": details,
        })
        res.send(req.body);

    } catch (err) {
        res.status(400).send(err);
    }
}

const editSpeacial = async(req, res) => {
    const id = req.params.id;
    const specialist = req.body.specialist;
    const details = req.body.details;

    try {
        const oneData = await specialistSc.findByIdAndUpdate(id, {
            "specialist": specialist,
            "details": details,
        })
        res.send(oneData);

    } catch (err) {
        res.status(400).send(err);
    }
}

const getSpeacial = async(req, res) => {

    try {
        const AllData = await specialistSc.find({}).sort('-date');
        res.send({AllData});

    } catch (err) {
        res.status(400).send(err);
    }
}

const deleteSpeacial = async(req, res) => {
    const id = req.params.id;

    try {
        await specialistSc.findByIdAndRemove(id);
        res.send('Deleted');

    } catch (err) {
        res.status(400).send(err);
    }
}

const toggleSpeacial = async(req, res) => {
    const id = req.params.id;
    const is_active = req.body.is_active;

    try {
        const oneData = await specialistSc.findByIdAndUpdate(id, {
            "is_active": is_active
        })
        res.send(oneData);

    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    postSpeacial,
    editSpeacial,
    getSpeacial,
    deleteSpeacial,
    toggleSpeacial
}