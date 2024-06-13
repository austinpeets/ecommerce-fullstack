const pg = require('pg')
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/ecommerce_backend');
const products = require('/Users/austinpitts/Documents/Coursework/ecommerce-capstone/server/data/mock-products.js')

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

client.query(createTable)

const seedDataBase = async () => {
    try {
        await client.connect()
        for (const product of products) {
            const query = `
            INSERT INTO products (name, price, stock, description, img, category)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
            `;
        
        const values = [product.name, product.price, product.stock, product.description, product.img, product.category]
        await client.query(query, values)
    }
    console.log('Data inserted successfully')
} catch (err) {
    console.error('Error inserting data', err)
} finally {
    client.end
}
}

seedDataBase()

