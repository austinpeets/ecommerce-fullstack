Here's a structured README for your GitHub repository:

---

# VitalVibes E-Commerce Platform

VitalVibes is an e-commerce platform developed using modern web technologies. The project is structured with a React frontend and an Express backend, and it leverages PostgreSQL for the database.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Seeding the Database](#seeding-the-database)
- [API Endpoints](#api-endpoints)
- [File Structure](#file-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication with JWT
- Product listing and detail pages
- Add to cart functionality
- Persistent cart for non-signed and signed-in users
- Responsive design with MUI

## Tech Stack

### Frontend
- React
- React Router DOM
- MUI
- Vite

### Backend
- Express
- PostgreSQL
- JSON Web Token (JWT)
- Bcrypt
- CORS
- Dotenv

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/berzyvonne/ecommerce-fullstack.git
    cd ecommerce-fullstack
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    # Frontend
    cd client
    npm install

    # Backend
    cd ../server
    npm install
    ```

## Running the Application

1. Ensure PostgreSQL is running and create a database named `ecommerce`.
2. Set up your `.env` file in the `server` directory based on the provided example.
3. Start the backend server:
    ```bash
    npm run dev
    ```

4. Start the frontend development server:
    ```bash
    cd ../client
    npm run dev
    ```

## Seeding the Database

To seed the database, run:
```bash
cd server
npm run start:seed
```

Ensure the `RUN_SEED` environment variable is set to `true` in your `.env` file.

## API Endpoints
- **GET /api/products** - Get all products
- **GET /api/products/:id** - Get a product by ID
- **POST /api/user/register** - Register a new user
- **POST /api/user/login** - Login a user
- **POST /api/cart** - Add an item to the cart
- **POST /api/cart/merge** - Merge local storage cart with user cart

## File Structure

```
ecommerce-fullstack/
├── client/                   # Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── index.html
│   └── ...
├── server/                   # Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── index.js
│   └── ...
├── .env
└── ...
```

## Environment Variables

Create a `.env` file in the `server` directory with the following:
```
PORT=8000
DB_HOST=localhost
DB_NAME=ecommerce
DB_PORT=5432
JWT_SECRET=your_jwt_secret
RUN_SEED=true
```

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests.

## License

This project is licensed under the MIT License.

---

This README template should provide a clear and organized view of your project for users and contributors.
