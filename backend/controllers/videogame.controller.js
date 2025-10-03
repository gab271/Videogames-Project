const db = require("../models");
const Videogame = db.videogames;
const Op = db.Sequalize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const videogame = {
        title: req.body.title,
        description: req.body.description,
        release_date: req.body.release_date,
        rating: req.body.rating,
        image: req.body.image
    };

    Videogame.create(videogame)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error creating the videogame."
            });
        });
};

exports.findAll = (req, res) => {
  console.log("GET /api/videogames called");
  Videogame.findAll()
    .then(data => {
      console.log("Data found:", data);
      res.send(data);
    })
    .catch(err => {
      console.error("Error:", err);
      res.status(500).send({
        message: err.message || "Some error creating some videogames."
      });
    });
};

exports.findOne = (req, res) => {
   
  const id = req.params.id;
  Videogame.findByPk(id)
};

exports.update = (req, res) => {
    const id = req.params.id;

    if (!req.body.title) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return;
    }

    const videogame = {
        title: req.body.title,
        description: req.body.description,
        release_date: req.body.release_date,
        rating: req.body.rating,
        image: req.body.image
    };

    Videogame.update(videogame, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Videogame was updated correctly."
            });
        } else {
            res.send({
                message: `Cannot update Videogame with id=${id}. `
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating the Videogame with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Videogame.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({ message: "Videogame deleted correctly" });
        } else {
            res.send({ message: "Cannot delete videogame. Maybe it was not found" });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Cant delete videogame with id=" + id
        });
    });
};