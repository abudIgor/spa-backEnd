const express = require("express");
const router = express.Router();
const controller = require("../controller/leadController");

/*Post*/
router.post("/",controller);


module.exports = router;