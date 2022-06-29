const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (NOT FOUND)
app.use((req, res) => {
  res.status(404).end();
});

// function that will start the express js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT},  http://localhost:3001/`);
});
