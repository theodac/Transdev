const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./app/middleware/error.middleware");

const routes = require("./app/routes");
const cors = require('cors');
const {connectDatabase} = require("./app/database");
const {loadFixtures} = require("./app/fixtures/fixtures")


dotenv.config();

const startServer = (port) => {
    // - Connect to database and load models
    connectDatabase();

    // - Create the express app
    const app = express();

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", '*');
        next();
    });

    app.options('*', cors())
    app.use(cors());

    app.use("/api", routes);

    app.use(errorHandler);

    app.listen(port);
    console.log(`Server started on port ${port}.`);
    loadFixtures();
};
startServer(process.env.PORT || 8080);
