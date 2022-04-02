//const createHttpError = require("http-errors");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const config = require("../config/environment");
const Server = require("./server");
const server = new Server();

server.app.get("/", function (req, res) {
    res.json("200");
});

server.app.use(errorHandlerMiddleware);
server.listen();
console.log(`App listening on http://${config.HOST}:${config.PORT} env: ${process.env.NODE_ENV}`);