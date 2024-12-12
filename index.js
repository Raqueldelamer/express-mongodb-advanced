const express = require('express');
const mongoose = require('mongoose');
const Song = require("./models/songs"); 
const User = require("./models/users")
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
        year: 1905,
    });

    //save to database
    const savedSong = await favSong.save();
    console.log(savedSong)

    //return the song object back
    res.json(savedSong);

});

app.get('/users', async (req, res) => {
    const theUser = new User({
        name: "Liz Taylor",
        email: "ltaylor@gmail.com",
        birthMonth: "February",
        isActive: "true",
    });
    const savedUser = await theUser.save();
    console.log(savedUser);

    res.json(savedUser);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});