const express = require("express");
const app = express();

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