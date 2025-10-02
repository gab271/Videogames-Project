const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const db = require("./models");

// Forzar sincronización y añadir datos de ejemplo
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    const videogames = [
        {
            title: "The Last of Us",
            description: "Survival horror game",
            release_date: "2013-06-14",
            rating: 9.5,
            image: "tlou.jpg"
        },
        {
            title: "Grand Theft Auto V",
            description: "Action-adventure game",
            release_date: "2013-09-17",
            rating: 9.8,
            image: "gtav.jpg"
        }
    ];
    
    db.videogames.bulkCreate(videogames)
        .then(() => {
            console.log("Sample videogames added to database");
        })
        .catch((err) => {
            console.log("Error adding sample videogames:", err);
        });
})
.catch(err => {
    console.error("Error syncing database:", err);
});

// Rutas
app.get("/", (req, res) => {
  res.json({message: "Welcome to videogames"});
});

require("./routes/videogames.routes")(app);

// DESPUÉS de las rutas va el manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});