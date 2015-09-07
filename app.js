var express = require("express"),
    app     = express(),
    cors    = require('cors'),
    http    = require("http"),
    server  = http.createServer(app);

app.use(cors());

app.get('/', function(req, res) {
  res.send("Hello world!");
});

app.get('/task', function(req, res) {
  res.json([{ name: "Task A" }, { name: "Task B" }]);
});

server.listen(8080, function() {
  console.log("Node server running on http://localhost:8080");
});