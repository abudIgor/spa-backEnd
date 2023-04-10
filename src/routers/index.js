const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    console.log('Teste Igor - GET - SPA');
    res.send('Hello SPA Back-End');
})

module.exports = router;