var http = require('http');
var fs = require('fs');
var tr = require('through2');

var port = process.argv[2]

var server = http.createServer(function(req, res) {
  if (req.method === "POST") {
    req.pipe(tr(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
    })).pipe(res);
  }
})

server.listen(port, function() {
  console.log("Server bound to port " + port);
})
