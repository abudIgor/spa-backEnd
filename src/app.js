const express = require("express");
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended : true,
    })
);

const indexRouter = require("./api/index");
const leadRouter = require("./api/lead");

app.use("/",indexRouter);
app.use("/lead",leadRouter);

module.exports = app;