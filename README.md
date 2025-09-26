🛒 Products API

A RESTful API to manage products, built with Node.js, Express, and MongoDB. Supports CRUD operations, advanced searches, pagination, and filtering.

🚀 Features

Create, read, update, and delete products

Filter products by category, price, stock, or name

Pagination for product lists

Input validation with express-validator

Secure HTTP headers with helmet and cors

Comprehensive API documentation via Swagger


🛠 Installation

Clone the repository

git clone https://github.com/AngelQuinteroDev/products-api
cd products-api

Install dependencies

npm install

Set up environment variables

Create a .env file in the root:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productsDB


Run the server

For development with auto-reload:

npm run dev


Or for production:

npm start

The API will run at: http://localhost:5000