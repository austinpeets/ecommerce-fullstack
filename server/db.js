const { Pool } = require("pg");
const dotenv = require("dotenv")

dotenv.config()

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
console.log('databasename',process.env.DB_NAME)


module.exports = pool;
