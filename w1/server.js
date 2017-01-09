/**
 * Created by Malena on 2017/1/8.
 */
var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');

app.use("/api/v1", restRouter);

app.use("/:shortUrl", redirectRouter);

app.listen(3000);