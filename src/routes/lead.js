const express = require("express");
const router = express.Router();
const controller = require("../controller/leadController");

/*Post*/
router.post("/",controller.add);

/*Get*/
router.get("/", controller.getAll);
router.get('/users/:phone', controller.get);

/*Put*/
router.put("/:id", controller.update);


module.exports = router;