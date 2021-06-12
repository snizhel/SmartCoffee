const config = require("./config");
const app = require("./server");
var http = require("http").Server(app);
const io = require("socket.io")(http);
io.on("connection", function (socket) {
  console.log("a user connected");
});

app.listen(8080, config.HOST, () => {
  console.log("Server is running");
});
