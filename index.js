const express = require('express');
const mongoose = require('mongoose');
const Song = require("./models/songs"); 
const app = express();
const port = 3002;

// Middleware to parse JSON bodies
app.use(express.json());

require('dotenv').config()

const mongoUrl = process.env.MONGO_URL

// Connect to MongoDB
mongoose
    .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
    console.log('Connected to MongoDB');
    })
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
    res.send('Hello, World from MongoDB!');
});

app.post('/songs', async (req, res) => {
    const favSong = new Song({
        title: "La Mer",
        artist: "Claude Debussy",
        genre: "classical",
    });

    //save to database
    const savedSong = await favSong.save();
    console.log(savedSong)

    //return the song object back
    res.json(savedSong);

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});