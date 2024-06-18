const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/ecommerce_backend"
);
const products = require("./data/mock-products");
const users = require("./data/mock-users");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const createTables = async () => {
  const dropTable = `
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users`;

  pool.query(dropTable);

  const createTable = `
    CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    description TEXT,
    img VARCHAR(255),
    category VARCHAR(100)
);`
// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

  pool.query(createTable);
};

createTables();

const seedDataBase = async () => {
    try {
      await pool.connect();
      for (const product of products) {
        const query = `
              INSERT INTO products (name, price, stock, description, img, category)
              VALUES ($1, $2, $3, $4, $5, $6)
              RETURNING *
              `;
  
        const values = [
          product.name,
          product.price,
          product.stock,
          product.description,
          product.img,
          product.category,
        ];
        await client.query(query, values);
      }
      console.log("Data inserted successfully");
    } catch (err) {
      console.error("Error inserting data", err);
    } finally {
      client.end;
    }
  };
  
  seedDataBase();

module.exports = { pool, createTables, seedDataBase };
