const express = require("express");
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended : true,
    })
);

const indexRouter = require("./router/index");
const leadRouter = require("./router/lead");

app.use("/",indexRouter);
app.use("/lead",leadRouter);

module.exports = app;