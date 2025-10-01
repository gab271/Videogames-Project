const dbConfig = require("../config/db.config");

const Sequalize = require("sequelize");
const sequelize = new Sequalize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};

db.Sequalize = Sequalize;
db.sequelize = sequelize;
db.videogames = require("./videogames.model")(sequelize, Sequalize); // Fixed file name

// Comment out or remove these lines until you create the models
// db.genres = require("./genre.model")(sequelize, Sequalize);
// db.platforms = require("./platform.model")(sequelize, Sequalize);

module.exports = db;