const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: "yourpasswd",
  database: "election",
  socketPath: "/tmp/mysql.sock",
});

module.exports = db;
