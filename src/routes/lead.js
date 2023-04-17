const express = require("express");
const router = express.Router();
const controller = require("../api/leadController");

/*Post*/
router.post("/",controller.add);


module.exports = router;