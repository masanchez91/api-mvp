const config = require("../config/environment");
const Server = require("./server");
const server = new Server();

server.app.get("/", function (req, res) {
    res.send("200");
});

server.listen();
console.log(`App listening on http://${config.HOST}:${config.PORT} env: ${process.env.NODE_ENV}`);