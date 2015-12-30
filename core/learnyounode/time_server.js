net = require('net');
strftime = require('strftime');
var port = Number(process.argv[2]);
var server = net.createServer(function (socket) {
  socket.end(getCurrentTime().toString() + '\n');
})

server.listen(port, function() { //'listening' listener
  console.log('server bound on port ' + port);
});

function getCurrentTime() {
  return strftime('%F %H:%M', new Date());
}
