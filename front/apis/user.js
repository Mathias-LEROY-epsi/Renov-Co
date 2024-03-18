const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());

//Connexion à la bdd
const dbUrl = 'mongodb://localhost:27017/Renov_&_Co';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

//Table utilisateurs en bdd
const Schema = mongoose.Schema;
const userSchema = new Schema({
  mail: {
    type: String,
    required: true
  },
  pseudo: {
    type: String,
    required: true
  },
  mdp: {
    type: String,
    required: true
  }
});

const User = mongoose.model('utilisateurs', userSchema);

//Création d'un utilisateur sans la route
/*const newUser = new User({
  mail: 'user1@gmail.com',
  pseudo: 'Pseudo utilisateur 1',
  mdp: 'P@ssw0rd'
});

newUser.save()
  .then((post) => console.log('New user saved:', post))
  .catch((error) => console.error('Error saving user:', error));*/

// Route POST users
app.post('/users', async (req, res) => {
  try {
    console.log(req.body);
    const { mail, pseudo, mdp } = req.body;
    const newUser = new User({ mail, pseudo, mdp });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

//Route GET all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving users' });
  }
});

//Route GET one user (id)
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving user' });
  }
});

// Route PUT user (id)
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { mail, pseudo, mdp } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { mail, pseudo, mdp }, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// Route DELETE (id)
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});