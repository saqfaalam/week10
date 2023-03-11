const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "week10",
  password: "kratonyk1999",
  port: 5432,
});

module.exports = pool;
