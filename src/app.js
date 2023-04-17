const express = require("express");
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(
    express.urlencoded({
        extended : true,
    })
);

const indexRouter = require("./routes/index");
const leadRouter = require("./routes/lead");

app.use("/",indexRouter);
app.use("/lead",leadRouter);

module.exports = app;