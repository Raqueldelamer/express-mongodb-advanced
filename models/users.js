const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    birthMonth: {type: String},
    isActive: {type: Boolean, default: true },
    

});

const User = mongoose.model("User", userSchema)

//default export
module.exports = User;