const router = require("express").Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use((req, _, next) => {
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next();
});

// - API Routes
router.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Hello world!".split("").reverse().join(""),
  });
});

module.exports = router;