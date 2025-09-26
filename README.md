# Products API

A RESTful API to manage products, built with **Node.js**, **Express**, and **MongoDB**.
Supports CRUD operations, complex search with filters, pagination, and comes with Swagger documentation.

## Features

 +  CRUD operations for products ✅
 +  Search products by name, category, stock, price 🔍
 +  Pagination for product listings 📄
 +  Input validation with express-validator 🛡
 +  Security headers with helmet & cors 🔒
 +  API documented using Swagger 📑

 ## 🛠 Installation

1. **Clone the repository**

```
git clone https://github.com/AngelQuinteroDev/products-api
cd products-api
```
2. **Install dependencies**
```
npm install
```
3. **Configure environment variables**

Create a .env file in the root directory
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/productsDB
```

4. **Run the server**

Development (auto-reload with nodemon)
```
npm run dev
```

The API will run at http://localhost:5000

## 📄 API Documentation

Explore and test the API interactively using Swagger:

[View Swagger Docs](http://localhost:5000/api-docs)

## 🔗 Endpoints Overview


| Method  | Endpoint          |    Description        |
| --------|:-------------:    |:-------------:      |
| POST    |/api/products      |Create a new product
| GET     | /api/products     | List products with optional filters & |pagination                    |
| GET     | /api/products/:id |Get a product by ID
| PUT     | /api/products/:id | Update a product by ID                    |
| DELETE  | /api/products/:id |Delete a product by ID
| GET     | /api/search       |Search products using multiple filters                     |


## 📊 Examples (Postman)
1.  Post products
```
POST http://localhost:5000/api/products

Content-Type: application/json
{
  "name": "Shirt",
  "price": 50,
  "stock": 10,
  "category": "clothing"
}

```
![POST Product](./docs/Post_Product.png)


2.  Get all products
```
GET http://localhost:5000/api/products?page=1&limit=10

```
![GET Products](./docs/Get_Pag.png)

3.  Update product
```
PUT http://localhost:5000/api/products/<product_id>

Content-Type: application/json
{
  "name": "Shirt",
  "price": 50,
  "stock": 10,
  "category": "clothing"
}

```
![PUT Product](./docs/Put_ID.png)

4.  Delete product
```
DELETE http://localhost:5000/api/products/<product_id>

```
![DELETE Product](./docs/Delete_Id.png)

5. Advanced Query (Search products category & stock)

```
GET http://localhost:5000/api/search?category=clothing&stock=0

```

## ⚡ Notes
+ Ensure MongoDB is running locally before starting the server
+ Modify .env to change PORT or MONGO_URI
+ Input validation ensures safe and consistent data
+ Paginated endpoints make querying large datasets efficient

## Swagger UI

![SWAGGER](./docs/Swagger.png)