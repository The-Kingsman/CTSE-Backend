const mongo = require("mongoose");

const teacher = mongo.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true 
    },
    age: {
        type: Number
    },
    contact: {
        type: Number
    },
    experience: {
        type: String
    },
    subject: {
        type: String
    },
    qualification: {
        type: String
    },
    bio: {
        type: String
    }
});
module.exports = mongo.model("teachers", teacher);