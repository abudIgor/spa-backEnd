const express = require("express");
const router = express.Router();
const controller = require("../controller/leadController");

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

/*Post*/
router.post("/",controller.add);


module.exports = router;