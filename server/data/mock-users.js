const bcrypt = require('bcrypt');

const users = [
  {
    id: 1,
    name: "John",
    lastname: "Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("password123", 10)
  },
  {
    id: 2,
    name: "Jane",
    lastname: "Smith",
    email: "jane@example.com",
    password: bcrypt.hashSync("secret456", 10)
  },
  {
    id: 3,
    name: "Alice",
    lastname: "Johnson",
    email: "alice@example.com",
    password: bcrypt.hashSync("qwerty789", 10)
  },
  {
    id: 4,
    name: "Bob",
    lastname: "Williams",
    email: "bob@example.com",
    password: bcrypt.hashSync("pass1234", 10)
  },
  {
    id: 5,
    name: "Sarah",
    lastname: "Davis",
    email: "sarah@example.com",
    password: bcrypt.hashSync("password567", 10)
  }
];

module.exports = users;