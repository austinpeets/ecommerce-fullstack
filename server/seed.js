const pool = require("./db");
const products = require("./data/mock-products");
const users = require("./data/mock-users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT = process.env.JWT || "shhh";

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
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
    );
    
    
    CREATE TABLE IF NOT EXISTS cart_items (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    products_id INTEGER NOT NULL,
    quantity INTEGER DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (products_id) REFERENCES products(id)
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
      const userquery = `
      INSERT INTO users (name, lastname, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `;

      const values = [user.name, user.lastname, user.email, user.password];
      const results = await pool.query(userquery, values);
      // console.log(results);
      console.log("Inserted user:", results.rows[0]);
    }

    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data", err);
  }
};

const createUser = async ({ name, lastname, email, password }) => {
  const SQL = `
    INSERT INTO users(name, lastname, email, password) VALUES($1, $2, $3, $4) RETURNING *
  `;
  const response = await pool.query(SQL, [
    name,
    lastname,
    email,
    await bcrypt.hash(password, 5),
  ]);
  return response.rows[0];
};

const createUserAndGenerateToken = async ({
  name,
  lastname,
  email,
  password,
}) => {
  const user = await createUser({ name, lastname, email, password });
  const token = jwt.sign({ id: user.id }, JWT);
  return { token };
};

const authenticate = async ({ email, password }) => {
  const SQL = `
    SELECT * FROM users WHERE email = $1
  `;
  const response = await pool.query(SQL, [email]);
  const userFound = response.rows.length > 0;
  let passwordMatches = false;

  if (userFound) {
    passwordMatches = await bcrypt.compare(password, response.rows[0].password);
  }

  if (!userFound || !passwordMatches) {
    const error = Error("not authorized");
    error.status = 401;
    throw error;
  }

  const token = jwt.sign({ id: response.rows[0].id }, JWT);
  return { token };
};

const addItemToCart = async (userId, productId, quantity = 1) => {
  const query = `
    INSERT INTO cart_items (user_id, product_id, quantity)
    VALUES ($1, $2, $3)
    ON CONFLICT (user_id, product_id) 
    DO UPDATE SET quantity = cart_items.quantity + EXCLUDED.quantity
    RETURNING *;
  `;
  const values = [userId, productId, quantity];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const runSeed = async () => {
  try {
    // await dropTables();
    await createTable();
    await seedDataBase();
  } catch (err) {
    console.error("Error running seed script:", err);
  } finally {
    await pool.end();
    console.log("Pool ended, seeding complete.");
  }
};


module.exports = {
  seedDataBase,
  createTable,
  dropTables,
  authenticate,
  createUserAndGenerateToken,
  addItemToCart,
  runSeed
};
