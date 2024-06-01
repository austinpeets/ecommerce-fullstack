const pg = require('pg')
const { v4: uuidv4 } = require('uuid');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/ecommerce_backend');


// const createTables = async() => {
//     const SQL = `
//     DROP TABLE IF EXISTS user;
//     DROP TABLE IF EXISTS admin;
//     DROP TABLE IF EXISTS shopping_cart;
//     DROP TABLE IF EXISTS cart_product;
//     DROP TABLE IF EXISTS product;
//     CREATE TABLE user(
//         id UUID PRIMARY KEY,
//         username VARCHAR NOT NULL,
//         password TEXT NOT NULL,
//         firstname VARCHAR NOT NULL,
//         lastname VARCHAR NOT NULL);
    
//     CREATE TABLE admin(
//         id UUID PRIMARY KEY,
//         username VARCHAR NOT NULL);

//     CREATE TABLE shopping_cart(
//         id UUID PRIMARY KEY,
//         quantity INTEGER NOT NULL,
//         price INTEGER NOT NULL,
//         total_price INTEGER NOT NULL,
//     )

//     CREATE TABLE cart_product(
//         id UUID PRIMARY KEY,
//         quantity INTEGER NOT NULL,
//         price INTEGER NOT NULL,
//     )

//     CREATE TABLE product(
//         id UUID PRIMARY KEY,
//         name VARCHAR NOT NULL,
//         description TEXT NOT NULL,
//         quantity INTEGER NOT NULL,
//         price INTEGER NOT NULL,
//     );
//     `
// }


