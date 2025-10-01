const db = require("../models");
const Videogame = db.videogames;
const Op = db.Sequalize.Op;

// Create and Save a new Videogame
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a videogame
  const videogame = {
    title: req.body.title,
    description: req.body.description,
    release_date: req.body.release_date,
    rating: req.body.rating,
    image: req.body.image
  };

  // Save videogame in the database
  Videogame.create(videogame)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Videogame."
      });
    });
};

// Retrieve all Videogames from the database
exports.findAll = (req, res) => {
  Videogame.findAll() // Changed videogame to Videogame
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving videogames."
      });
    });
};

// Find a single Videogame with an id
exports.findOne = (req, res) => {
   
  const id = req.params.id;
  Videogame.findByPk(id)
};

// Update a Videogame by the id in the request
exports.update = (req, res) => {
};

// Delete a Videogame with the specified id in the request
exports.delete = (req, res) => {
};