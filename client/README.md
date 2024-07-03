VitalVibes E-Commerce Platform
VitalVibes is an e-commerce platform developed using modern web technologies. The project is structured with a React frontend and an Express backend, and it leverages PostgreSQL for the database.

Table of Contents
Features
Tech Stack
Installation
Running the Application
Seeding the Database
API Endpoints
File Structure
Environment Variables
Contributing
License
Features
User authentication with JWT
Product listing and detail pages
Add to cart functionality
Persistent cart for non-signed and signed-in users
Responsive design with MUI
Tech Stack
Frontend
React
React Router DOM
MUI
Vite
Backend
Express
PostgreSQL
JSON Web Token (JWT)
Bcrypt
CORS
Dotenv
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/berzyvonne/ecommerce-fullstack.git
cd ecommerce-fullstack
Install dependencies for both frontend and backend:


# Frontend
cd client
npm install

# Backend
cd ../server
npm install
Running the Application
Ensure PostgreSQL is running and create a database named ecommerce.

Set up your .env file in the server directory based on the provided example.

Start the backend server:

npm run dev
Start the frontend development server:

bash
Copy code
cd ../client
npm run dev
Seeding the Database
To seed the database, run:


cd server
npm run start:seed
Ensure the RUN_SEED environment variable is set to true in your .env file.

API Endpoints
GET /api/products - Get all products
GET /api/products/
- Get a product by ID
POST /api/user/register - Register a new user
POST /api/user/login - Login a user
POST /api/cart - Add an item to the cart
POST /api/cart/merge - Merge local storage cart with user cart
File Structure
bash

Environment Variables
Create a .env file in the server directory with the following:

PORT=8000
DB_HOST=localhost
DB_NAME=ecommerce
DB_PORT=5432
JWT_SECRET=your_jwt_secret
RUN_SEED=true
Contributing
Contributions are welcome! Please fork this repository and submit pull requests.

License
This project is licensed under the MIT License.