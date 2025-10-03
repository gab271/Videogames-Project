module.exports = (sequelize, Sequalize) => {
  const Videogame = sequelize.define("videogame", {
    title: {
      type: Sequalize.STRING
    },
    description: {
      type: Sequalize.TEXT
    },
    release_date: {
      type: Sequalize.DATE
    },
    rating: {
      type: Sequalize.FLOAT
    }
  });
  return Videogame;
}