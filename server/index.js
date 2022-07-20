const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const getRoutes = require("./src/routes/index");

require("dotenv").config();
const db = require("./src/config/db.config");
const port = require("./src/config/port.config");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.json());

// MongoDB Promise
/* const dbConfig = require("./src/config/db.config");
const consoleMessage = require("./src/utils/consoleMessage"); */
const server = mongoose.connect(
  `mongodb+srv://${db.USER}:${db.PWD}@${db.DBNAME}.mongodb.net/${db.TABLE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.set("debug", true);

// Setup server to start listening
/* const serverConfig = require("./src/config/server.config");
 */
server.then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});

// Error checker for mongoose
const co = mongoose.connection;
co.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

getRoutes(app);

//route
app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});
