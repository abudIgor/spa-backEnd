const express = require("express");
const router = express.Router();
const controller = require("../controllers/leadController");


/*Post*/
router.post("/",controller.add);


module.exports = router;