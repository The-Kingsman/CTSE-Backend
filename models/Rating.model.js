const mongo = require('mongoose')

const rating = mongo.Schema({
  teacher_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  rating: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
})
module.exports = mongo.model('ratings', rating)
