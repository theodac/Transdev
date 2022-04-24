const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./app/middleware/error.middleware");

const routes = require("./app/routes");
const { connectDatabase } = require("./app/database");

dotenv.config();

const startServer = (port) => {
  // - Connect to database and load models
  connectDatabase();

  // - Create the express app
  const app = express();

  app.use("/api", routes);

  app.use(errorHandler);

  app.listen(port);
  console.log(`Server started on port ${port}.`);
};
startServer(process.env.PORT || 8080);
