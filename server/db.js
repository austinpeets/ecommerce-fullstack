const { Pool } = require("pg");
const dotenv = require("dotenv")

dotenv.config()
const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/ecommerce';
const pool = new Pool({
connectionString
});



module.exports = pool;
