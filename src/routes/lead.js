const express = require("express");
const router = express.Router();
const controller = require("../controller/leadController");

/*Post*/
router.post("/",controller.add);

/*Get All*/
router.get("/", controller.getAll);

/*Get*/
router.get("/:phone", controller.getByPhone);


module.exports = router;