const rating = require('../models/Rating.model');

const getAll = async (req, res) => {
  await rating
    .find()
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

const getById = async (req, res) => {
  await rating
    .findOne({ _id: req.params.id })
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

const create = async (req, res) => {
  await rating
    .create({
      teacher_id: req.body.teacher_id,
      user_id: req.body.user_id,
      username: req.body.username,
      rating: req.body.rating,
      comment: req.body.comment,
    })
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

const update = async (req, res) => {
  await rating
    .updateOne(
      { _id: req.params.id },
      {
        teacher_id: req.body.teacher_name,
        user_id: req.body.user_id,
        username: req.body.username,
        rating: req.body.rating,
        comment: req.body.comment,
      }
    )
    .then((result) => {
      return rating.findOne({ _id: result._id });
    })
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

const deleteById = async (req, res) => {
  await rating
    .deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

// needs teacher id
const getRatingByTeacher = async (req, res) => {
  let userRating = null;

  await rating
    .find({ teacher_id: req.params.id })
    .then((result) => {
      res.json({
        result: result,
      });
    })
    .catch((error) => {
      res.json({
        result: error,
      });
    });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getRatingByTeacher,
};
