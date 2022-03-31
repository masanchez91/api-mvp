require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const HTTPServer = require("http").Server;
const app = new express();
const port = process.env.PORT || 8080;

app.use(cors())
app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', function (req, res) {
    res.send("200");
});

app.listen(port);
const httpServer = new HTTPServer(app);
console.log("Ready @ http://localhost:", port, process.env.NODE_ENV, "env");
module.exports = httpServer;