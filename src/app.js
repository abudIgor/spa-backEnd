const express = require("express");
const app = express();
import cors from 'cors';

app.use(express.json());
app.use(
    express.urlencoded({
        extended : true,
    })
);

app.use(cors({
    origin: '*'
}));

const indexRouter = require("./routers/index");
const leadRouter = require("./routers/lead");

app.use("/",indexRouter);
app.use("/lead",leadRouter);

module.exports = app;