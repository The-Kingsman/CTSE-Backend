const teacher = require("../models/teacher.model");

const getAll = async (req, res)  => {
    await teacher.find().select("-password")
    .then(result => {
        res.json({
            results: result
        });
    })
    .catch(error => {
        res.send(error);
    });
};

const getById = async (req, res) => {
    await teacher.findOne({_id: req.params.id}).select("-password")
    .then(result => {
        res.json({
            results: result
        });
    })
    .catch(error => {
        res.send(error);
    });
};

const create = async (req, res) => {
    await teacher.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        contact: req.body.contact,
        experience: req.body.experience,
        subject: req.body.subject,
        qualification: req.body.qualification,
        bio: req.body.bio
    })
    .then(result => {
        res.json({
            results: result
        });
    })
    .catch(error => {
        res.send(error);
    });
};

const update = async (req, res) => {
    await teacher.updateOne({ _id: req.params.id },{
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        contact: req.body.contact,
        experience: req.body.experience,
        subject: req.body.subject,
        qualification: req.body.qualification,
        bio: req.body.bio
    })
    .then(result => {
        return teacher.findOne({_id: result._id})
    })
    .then(result => {
        res.json({
            results: result
        });
    })
    .catch(error => {
        res.send(error);
    });
};

const deleteById = async (req, res) => {
    await teacher.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({
            results: result
        });
    })
    .catch(error => {
        res.send(error);
    });
};

module.exports = { getAll, getById, create, update, deleteById };