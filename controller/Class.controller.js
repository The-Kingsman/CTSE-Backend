const _class = require('../models/Class.model')

const getAll = async (req, res) => {
  await _class
    .find()
    .then((result) => {
      res.json({
        results: result,
      })
    })
    .catch((error) => {
      res.send(error)
    })
}

const getById = async (req, res) => {
  await _class
    .findOne({ _id: req.params.id })
    .then((result) => {
      res.json({
        results: result,
      })
    })
    .catch((error) => {
      res.send(error)
    })
}

const create = async (req, res) => {

  const {
  teacher_id,
  time,
  location,
  fee,
  day,
  subject,
  grade,
  decription } = req.body;
  await _class
    .create({
      teacher_id: req.body.teacher_id,
      time: req.body.time,
      location: req.body.location,
      fee: req.body.fee,
      day: req.body.day,
      subject: req.body.subject,
      grade: req.body.grade,
      description: req.body.description
    })
    .then((result) => {
      res.json({
        results: result,
      })
    })
    .catch((error) => {
      res.send(error)
    })
}

const update = async (req, res) => {
  await _class
    .updateOne(
      { _id: req.params.id },
      {
        time: req.body.time,
        location: req.body.location,
        fee: req.body.fee,
        day: req.body.day,
        subject: req.body.subject,
        grade: req.body.grade,
        description: req.body.description
      },
    )
    .then((result) => {
      res.json({
        results: result,
      })
    })
    .catch((error) => {
      res.send(error)
    })
}

const deleteById = async (req, res) => {
  await _class
    .deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({
        results: result,
      })
    })
    .catch((error) => {
      res.send(error)
    })
}

const getByTeacher = async (req,res) => {
  await _class
    .find({ teacher_id: req.params.id })
    .then((result) => {
      res.json({
        results: result,
      })
    })
    .catch((error) => {
      res.send(error)
    })
};

module.exports = { getAll, getById, create, update, deleteById, getByTeacher }
