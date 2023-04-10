const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

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