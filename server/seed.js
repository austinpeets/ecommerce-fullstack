const pool = require("./db");
const products = require("./data/mock-products");
const users = require("./data/mock-users");
const bcrypt = require('bcrypt')

const dropTables = async () => {
  const dropTableQuery = `
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users;
  `;
  try {
    console.log("Dropping existing tables...");
    await pool.query(dropTableQuery);
    console.log("Tables dropped successfully");
  } catch (err) {
    console.error("Error dropping tables:", err);
    throw err;
  }
};

const createTable = async () => {
  const createTable = `
    CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    description TEXT,
    img VARCHAR(255),
    category VARCHAR(100)
    );
    
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
    );`;

  try {
    await pool.query(createTable);
    console.log("Tables created successfully");

    // await pool.query(dropTableQuery);
  } catch (err) {
    console.error("Error creating tables:", err);
    throw err; // Exit if table creation fails
  }
};

const seedDataBase = async () => {
  try {
    await createTable();
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
      await pool.query(query, values);
    }

    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const userquery = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *
      `;

      const values = [user.name, user.email, hashedPassword];
      const results = await pool.query(userquery, values);
      console.log(results)
      console.log("Inserted user:", results.rows[0]);
    }

    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data", err);
  }
};

const runSeed = async () => {
  try {
    await dropTables();
    await createTable();
    await seedDataBase();
  } catch (err) {
    console.error("Error running seed script:", err);
  } finally {
    await pool.end();
    console.log("Pool ended, seeding complete.");
  }
};

runSeed();

module.exports = { seedDataBase, createTable, dropTables };
