var map = require('through2-map')
var http = require('http')

var port = Number(process.argv[2])

server = http.createServer(function (req, res) {
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port, function() {
  console.log("server bound to port " + port);
});
