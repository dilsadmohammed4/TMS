const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  res.render("journal");
});

module.exports = router;
