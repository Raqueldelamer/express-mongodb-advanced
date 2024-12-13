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

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch(error) {
        res.status(500).json({
            message: 'error fetching users' });
    }
});


app.delete('/users/:Id', async (req, res) => {
    try {
        const userId  = req.params.Id;
        console.log(userId);
        const deletedUser = await User.deleteOne({ _id: userId }); // Delete the user by ID
        res.json(deletedUser);
    } catch (error) {
        console.log(error);
        res.json({message: "error deleting user"})
    }
})

    //  Update a User by Id
app.put('/users/:Id', async (req, res) => {
    const userId  = req.params.Id;
    console.log(userId);
    const updatedData = req.body; 
            try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
            if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
});

//  Deactivate User
app.put('/users/:Id/deactivate', async (req, res) => {
    const userId  = req.params.Id;
    try {
        const deactivatedUser = await User.findByIdAndUpdate(userId, { isActive: false }, { new: true });
    if (!deactivatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deactivated successfully', deactivatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error deactivating user' });
    }
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});