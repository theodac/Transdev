const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/error");

const routes = require("./app/routes");
const { connectDatabase, loadDatabaseModels } = require("./app/database");

dotenv.config();

const startServer = (port) => {
  // - Connect to database and load models
  connectDatabase();
  loadDatabaseModels();

  // - Create the express app
  const app = express();

  app.use("/api", routes);

  app.use(errorHandler);

  app.listen(port);
  console.log(`Server started on port ${port}.`);
};
startServer(process.env.PORT || 8080);
