module.exports = {
  HOST: "localhost",
  USER: "root",  // Change from 'gab' to your MySQL username
  PASSWORD: "1234",  // Your MySQL password
  DB: "videogames",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};