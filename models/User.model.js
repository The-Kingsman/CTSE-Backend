const mongo = require("mongoose");

const user = mongo.Schema({
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
    password: {
        type: String
    },
    role: {
        type: String,
        required: true
    }
});

module.exports = mongo.model("user", user);