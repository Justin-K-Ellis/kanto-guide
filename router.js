const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller.js");

router.get("/", controller.renderIndex);
router.get("/tokyo", controller.renderTokyo);
router.get("/kanagawa", controller.renderKanagawa);
router.get("/chiba", controller.renderChiba);
router.get("/saitama", controller.renderSaitama);

module.exports = router;
