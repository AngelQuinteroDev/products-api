const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Products API",
      version: "1.0.0",
      description: "REST API to manage products",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      schemas: {
        Product: {
          type: "object",
          required: ["name", "price", "category"],
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            price: { type: "number" },
            stock: { type: "integer" },
            category: { type: "string" },
          },
          example: {
            _id: "64f9e1c4a7b3a8e123456789",
            name: "Shirt",
            price: 50,
            stock: 10,
            category: "clothing",
          },
        },
        ProductInput: {
          type: "object",
          required: ["name", "price", "category"],
          properties: {
            name: { type: "string" },
            price: { type: "number" },
            stock: { type: "integer" },
            category: { type: "string" },
          },
          example: {
            name: "Shirt",
            price: 50,
            stock: 10,
            category: "clothing",
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // Here you will read the JSDoc comments in the routes files.
};

const specs = swaggerJsDoc(options);

function setupSwagger(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
