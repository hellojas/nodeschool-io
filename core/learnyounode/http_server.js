http = require('http')
fs = require('fs');

var port = Number(process.argv[2]);
var text_file = process.argv[3];

server = http.createServer(function (req, res) {
    // res.writeHead(200, { 'content-type': 'text/plain' })

    console.log("req");
    src = fs.createReadStream(text_file);
    src.on('open', function () {
      src.pipe(res);
    });
    src.on('error', function() {
      console.log("error wth fs");
    })
  });

server.listen(port, function() {
  console.log("server bound to port " + port);
});
