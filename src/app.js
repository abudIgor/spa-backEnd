const express = require("express");
const app = express();


app.use(express.json());
app.use(
    express.urlencoded({
        extended : true,
    })
);

const indexRouter = require("./routers/index");
const leadRouter = require("./routers/lead");

app.use("/",indexRouter);
app.use("/lead",leadRouter);

module.exports = app;