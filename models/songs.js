const mongoose = require("mongoose");

const songSchema = mongoose.Schema({

    title: {type: String},
    artist: {type: String},
    genre: {type: String},
    year: {type: String},

});

const Song = mongoose.model("Song", songSchema)

//default export
module.exports = Song;