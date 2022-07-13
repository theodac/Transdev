const router = require("express").Router();
const bodyParser = require("body-parser");

const commercialRouter = require("./commercial");
const buyingRouter = require("./buying");
const exploitationRouter = require("./exploitation");
const humanRessourcesRouter = require("./human_ressources");
const qualityEnvironmentRouter = require("./quality_environment");
const technicalRouter = require("./technical");
const exploitationv2Router = require("./exploitationv2");

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
router.use("/commercial", commercialRouter);
router.use("/buying", buyingRouter);
router.use("/exploitation", exploitationRouter);
router.use("/human_ressources", humanRessourcesRouter);
router.use("/quality_environment", qualityEnvironmentRouter);
router.use("/technical", technicalRouter);
router.use("/exploitation_v2", exploitationv2Router);

module.exports = router;
