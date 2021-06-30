const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
