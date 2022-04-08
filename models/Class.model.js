const mongo = require('mongoose')

const _class = mongo.Schema({
  teacher_id: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  fee: {
    type: String,
    required: false,
  },
  day: {
    type: String,
    required: false,
  },
  subject: {
    type: String,
    required: false,
  },
  grade: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
})
module.exports = mongo.model('class', _class)
