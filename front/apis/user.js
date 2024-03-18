var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Renov_&_Co', function(err, db) {
  if (err) {
    throw err;
  }
  db.collection('Utilisateur').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('Hello World!')
})

app.post('/users', function (req, res) {
    res.send('Got a POST request');
});

app.put('/user/id', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/user/id', function (req, res) {
    res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})