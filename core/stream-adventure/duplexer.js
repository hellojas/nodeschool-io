var spawn = require('child_process').spawn;
var duplexer2 = require('duplexer2');

module.exports = function(cmd, args) {

  var spawn_process = spawn(cmd, args);
  var dp = duplexer2(spawn_process.stdin, spawn_process.stdout);
  return dp
}
