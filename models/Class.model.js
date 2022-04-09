const mongo = require('mongoose')

const _class = mongo.Schema({
  teacher_id: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
module.exports = mongo.model('class', _class)
