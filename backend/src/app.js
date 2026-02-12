const express = require("express");
const flagsRoutes = require("./routes/flags.routes");

const app = express();
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Config Service backend is running");
});

// Mount flag routes
app.use("/flags", flagsRoutes);

module.exports = app;
