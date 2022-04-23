const routes = require("express").Router();
const bodyParser = require("body-parser");

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.use((req, _, next) => {
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next();
});

routes.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Hello world!" });
});

// - API Routes

module.exports = routes;
