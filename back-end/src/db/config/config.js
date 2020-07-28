const dotenv = require("dotenv");
dotenv.config();

const credential = {
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_pass: process.env.DB_PASS,
  host: process.env.HOST,
};

module.exports = { credential };
