const cors = require('cors');
const express = require('express');

require("dotenv").config();

const port = process.env.PORT || 3200;

const app = express();

app.use(cors());

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => { res.send('Hello from Express!') });

//route
app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});
