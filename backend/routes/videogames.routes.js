module.exports = app => {
    const videogames = require("../controllers/videogame.controller.js");
    var router = require("express").Router();

    // Retrieve all videogames
    router.get("/", videogames.findAll);

    app.use('/api/videogames', router);
};