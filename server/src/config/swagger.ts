const swaggerUi: any = require("swagger-ui-express");
const swaggerJsdoc: any = require("swagger-jsdoc");
import { Application } from "express";

class Swagger {
  private swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Swagger API",
        version: "1.0.0",
        description: "Documentation Express API with Swagger",
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
      servers: [
        {
          url: "http://localhost:3001",
        },
      ],
    },
    apis: ["./src/routes/*.ts"],
  };

  private swaggerDocs = swaggerJsdoc(this.swaggerOptions);

  public setup(app: Application): void {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(this.swaggerDocs));
  }
}

export default new Swagger();
