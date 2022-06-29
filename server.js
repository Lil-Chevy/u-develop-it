const mysql = require("mysql2");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "",
    database: "election",
  },
  console.log("Connected to the election database.")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});
// Connect to database

// Default response for any other request (NOT FOUND)
app.use((req, res) => {
  res.status(404).end();
});

// function that will start the express js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT},  http://localhost:3001`);
});
