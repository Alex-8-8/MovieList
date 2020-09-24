const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');

mongoose.connect('mongodb://127.0.0.1:27017/movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('mongodb success yahooo');
});

const PORT = 5000;

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  Movie.find().collation({
    locale: 'en',
    strength: 2,
  }).sort({ title: 1 })
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.post('/add', (req, res) => {
  const movie = new Movie(req.body);

  movie
    .save()
    .then((movieItem) => {
      res.json(movieItem);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get('/searchTitle/:string', (req, res) => {
  Movie.find(
    { title: {
      $regex: req.params.string,
      $options: 'i',
    } },
    (err, movies) => {
      if (err) {
        res.json(err);
      }

      res.json(movies);
    },
  );
});

app.get('/searchName/:string', (req, res) => {
  Movie.find(
    { stars: {
      $regex: req.params.string,
      $options: 'i',
    } },
    (err, movies) => {
      if (err) {
        res.json(err);
      }

      res.json(movies);
    },
  );
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  Movie.remove({ _id: id }, (err, movie) => {
    if (err) {
      res.json(err);
    } else {
      Movie.find().collation({
        locale: 'en',
        strength: 2,
      }).sort({ title: 1 })
        .then((movies) => {
          res.json(movies);
        })
        .catch((error) => {
          res.status(500).send(error.message);
        });
    }
  });
});

app.get('/movie/:id', (req, res) => {
  const { id } = req.params;

  Movie.findById(id, (err, movie) => {
    if (err) {
      res.json(err);
    } else {
      res.json(movie);
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
