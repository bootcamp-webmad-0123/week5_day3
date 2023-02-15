require("dotenv").config();

const express = require("express");
const app = express();

require("./config")(app);

app.locals.appTitle = `Characters API`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const charactersRoutes = require("./routes/characters.routes");
app.use("/personajes", charactersRoutes);

require("./error-handling")(app);

module.exports = app;
