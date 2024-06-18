// const seedDataBase = require('../db')

// const seedDataBase = async () => {
//     try {
//       await pool.connect();
//       for (const product of products) {
//         const query = `
//               INSERT INTO products (name, price, stock, description, img, category)
//               VALUES ($1, $2, $3, $4, $5, $6)
//               RETURNING *
//               `;
  
//         const values = [
//           product.name,
//           product.price,
//           product.stock,
//           product.description,
//           product.img,
//           product.category,
//         ];
//         await client.query(query, values);
//       }
//       console.log("Data inserted successfully");
//     } catch (err) {
//       console.error("Error inserting data", err);
//     } finally {
//       client.end;
//     }
//   };
  
//   seedDataBase();