var express = require("express"),
    app     = express(),
    cors    = require('cors'),
    http    = require("http"),
    server  = http.createServer(app);

app.use(cors());

app.get('/todo', function(req, res) {
  res.json([
    { id: 1, content: 'Buy milk', completed: true },
    { id: 2, content: 'Buy beer', completed: false }
  ]);
});

app.post('/todo', function(req, res) {
  res.send(200);
});

app.put('/todo/:todo', function(req, res) {
  res.send(200);
});

app.delete('/todo/:todo', function(req, res) {
  res.send(200);
});

server.listen(8080, function() {
  console.log("Node server running on http://localhost:8080");
});
