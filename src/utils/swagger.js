import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from "swagger-ui-express";


const swaggerDefinition = {
  openapi: '3.0.0', 
  info: {
    title: 'Book Management System API', 
    version: '1.0.0', 
    description: 'A simple Book management system API which follow CRUD operations and RESTful architecture.', 
  },
  servers: [
    {
      url: 'http://ec2-16-171-30-120.eu-north-1.compute.amazonaws.com', 
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};