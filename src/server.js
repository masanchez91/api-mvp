const config = require("../config/environment");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const HTTPServer = require("http").Server;
class Server {
    app = express.application;
    DEFAULT_PORT_SERVER = config.PORT || 8080;
    DEFAULT_HOST_SERVER = config.HOST || "127.0.0.1";
    httpServer = HTTPServer;

    constructor() {
        this.configExpress();
        this.initializeMiddlewares();
        this.createServer();
    }

    configExpress() {
        this.app = express();
    }

    initializeMiddlewares() {
        this.app.use(cors())
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    }

    createServer() {
        this.httpServer = new HTTPServer(this.app);
    }

    listen() {		
        this.httpServer.listen(this.DEFAULT_PORT_SERVER, this.DEFAULT_HOST_SERVER);
    }
}

module.exports = Server;