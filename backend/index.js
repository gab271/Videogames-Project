const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync()
  .then(() => {
    console.log("Connected to database.");
  })
  .catch(err => {
    console.error("Error connecting to database:", err);
  });


app.get("/", (req, res) => {
  res.json({ message: "Welcome to videogames application." });
});

require("./routes/videogames.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});