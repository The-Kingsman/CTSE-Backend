const mongo = require('mongoose')

const rating = mongo.Schema({
  teacher_id: {
    type: String,
    required: false,
  },
  rating: {
    type: String,
    required: false,
  },
  comment: {
    type: String,
    required: false,
  },
})
module.exports = mongo.model('ratings', rating)
