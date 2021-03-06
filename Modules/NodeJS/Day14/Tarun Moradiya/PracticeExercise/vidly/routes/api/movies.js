const express = require('express');
const { Genre } = require('../../models/gernes');
const router = express.Router();

const {Movie, validate} = require('../../models/movies');

router.get('/', async (req, res) => {
  const movies = await Movie.find().sort('title');
  res.send(movies);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId)
  if(!genre) return res.status(400).send('genre not exist');

  let movie = new Movie ({ 
    title: req.body.title,
    genre: {
        _id: genre._id,
        name: genre.name
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate
   });

   //don't need to return object here because mongodb driver sets objectid automaticaly
  // movie = await movie.save();
  
  await movie.save();

  res.send(movie);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId)
  if(!genre) return res.status(400).send('genre not exist');

  const movie = Movie.findByIdAndUpdate(req.params.id, { 
    title: req.body.title,
    genre:  {
        _id: genre._id,
        name: genre.name
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate
   }, {
    new: true //to get the updated object from db
  })

  if (!movie) return res.status(404).send('The movie with the given ID was not found.');

  res.send(movie);
});

router.delete('/:id', async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id)
  if (!movie) return res.status(404).send('The movie with the given ID was not found.');

  res.send(movie);
});

router.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id)
  if (!movie) return res.status(404).send('The movie with the given ID was not found.');
  res.send(movie);
});

module.exports = router;