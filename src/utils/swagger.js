import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from "swagger-ui-express";


const swaggerDefinition = {
  openapi: '3.0.0', 
  info: {
    title: 'Test CI/CD', 
    version: '1.0.0', 
    description: 'API documentation for Test CI/CD', 
  },
  servers: [
    {
      url: 'http://ec2-16-171-30-120.eu-north-1.compute.amazonaws.com', 
      // "url": "http://localhost:8000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec , {
      swaggerOptions: {
        deepLinking: false,  
      },
    })
  );
};