const express = require("express");
const cors = require("cors");
const router = express.Router();
const controller = require("../controllers/leadController");


/*Post*/
router.post("/",cors(),controller.add);


module.exports = router;