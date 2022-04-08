const student = require("../models/student.model");

const getAll = async (req, res)  => {
    await student.find().select("-password")
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
    await student.findOne({_id: req.params.id}).select("-password")
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
    await student.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        contact: req.body.contact,
        password: req.body.password
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
    await student.updateOne({ _id: req.params.id },{
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        contact: req.body.contact,
        password: req.body.password
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
    await student.deleteOne({ _id: req.params.id })
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